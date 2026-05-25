/// <reference types="@cloudflare/workers-types" />

import {
  escapeHtml,
  formatVnd,
  isRecord,
  jsonResponse,
  optionsResponse,
  readJson,
  sendShopEmail,
  type Env,
} from '../_shared/email'

type Customer = {
  name: string
  phone: string
  email: string
  address: string
  note: string
}

type OrderItem = {
  id: string
  slug: string
  name: string
  priceVnd: number
  quantity: number
}

type ValidOrder = {
  locale: 'vi' | 'en'
  customer: Customer
  items: OrderItem[]
  totalVnd: number
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function cleanString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function validateOrder(body: unknown): { ok: true; order: ValidOrder } | { ok: false; message: string } {
  if (!isRecord(body)) return { ok: false, message: 'Invalid JSON body' }

  const customerBody = body.customer
  if (!isRecord(customerBody)) return { ok: false, message: 'Customer information is required' }

  const customer: Customer = {
    name: cleanString(customerBody.name, 120),
    phone: cleanString(customerBody.phone, 60),
    email: cleanString(customerBody.email, 160),
    address: cleanString(customerBody.address, 300),
    note: cleanString(customerBody.note, 1000),
  }

  if (!customer.name || !customer.phone || !customer.email || !customer.address) {
    return { ok: false, message: 'Missing required customer fields' }
  }

  if (!emailPattern.test(customer.email)) {
    return { ok: false, message: 'Invalid customer email' }
  }

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 50) {
    return { ok: false, message: 'Order must contain at least one item' }
  }

  const items: OrderItem[] = []

  for (const item of body.items) {
    if (!isRecord(item)) return { ok: false, message: 'Invalid order item' }

    const priceVnd = Number(item.priceVnd)
    const quantity = Number(item.quantity)
    const orderItem: OrderItem = {
      id: cleanString(item.id, 120),
      slug: cleanString(item.slug, 160),
      name: cleanString(item.name, 180),
      priceVnd,
      quantity,
    }

    if (!orderItem.id || !orderItem.name || !Number.isFinite(priceVnd) || priceVnd <= 0) {
      return { ok: false, message: 'Invalid order item data' }
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      return { ok: false, message: 'Invalid order item quantity' }
    }

    items.push(orderItem)
  }

  const totalVnd = items.reduce((sum, item) => sum + item.priceVnd * item.quantity, 0)
  const locale = body.locale === 'en' ? 'en' : 'vi'

  return { ok: true, order: { locale, customer, items, totalVnd } }
}

function buildOrderEmail(order: ValidOrder, orderId: string) {
  const itemLines = order.items.map((item) => {
    return `${item.name} x ${item.quantity} - ${formatVnd(item.priceVnd * item.quantity)}`
  })

  const rows = order.items
    .map((item) => {
      return `<tr>
        <td style="padding:10px;border-bottom:1px solid #eadcc7;">${escapeHtml(item.name)}</td>
        <td style="padding:10px;border-bottom:1px solid #eadcc7;text-align:center;">${item.quantity}</td>
        <td style="padding:10px;border-bottom:1px solid #eadcc7;text-align:right;">${formatVnd(item.priceVnd)}</td>
        <td style="padding:10px;border-bottom:1px solid #eadcc7;text-align:right;">${formatVnd(item.priceVnd * item.quantity)}</td>
      </tr>`
    })
    .join('')

  const text = [
    `New Otter Shogi order: ${orderId}`,
    '',
    `Customer: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    `Email: ${order.customer.email}`,
    `Address: ${order.customer.address}`,
    `Note: ${order.customer.note || '-'}`,
    '',
    'Items:',
    ...itemLines,
    '',
    `Total: ${formatVnd(order.totalVnd)}`,
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;color:#201813;line-height:1.5;">
      <h1 style="margin:0 0 16px;color:#4a281c;">New Otter Shogi order</h1>
      <p><strong>Order ID:</strong> ${escapeHtml(orderId)}</p>
      <h2 style="color:#4a281c;">Customer</h2>
      <p>
        <strong>Name:</strong> ${escapeHtml(order.customer.name)}<br>
        <strong>Phone:</strong> ${escapeHtml(order.customer.phone)}<br>
        <strong>Email:</strong> ${escapeHtml(order.customer.email)}<br>
        <strong>Address:</strong> ${escapeHtml(order.customer.address)}<br>
        <strong>Note:</strong> ${escapeHtml(order.customer.note || '-')}
      </p>
      <h2 style="color:#4a281c;">Items</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px;">
        <thead>
          <tr style="background:#f6f0e4;">
            <th style="padding:10px;text-align:left;">Product</th>
            <th style="padding:10px;text-align:center;">Qty</th>
            <th style="padding:10px;text-align:right;">Price</th>
            <th style="padding:10px;text-align:right;">Line total</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p style="font-size:18px;"><strong>Total:</strong> ${formatVnd(order.totalVnd)}</p>
    </div>
  `

  return { text, html }
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method === 'OPTIONS') return optionsResponse()

  if (request.method !== 'POST') {
    return jsonResponse({ message: 'Method not allowed' }, { status: 405, headers: { Allow: 'POST' } })
  }

  const validation = validateOrder(await readJson(request))

  if (!validation.ok) {
    return jsonResponse({ message: validation.message }, { status: 400 })
  }

  const orderId = `OS-${Date.now().toString(36).toUpperCase()}`
  const email = buildOrderEmail(validation.order, orderId)

  try {
    await sendShopEmail(env, {
      subject: `[Otter Shogi] New order ${orderId}`,
      text: email.text,
      html: email.html,
    })

    return jsonResponse({ ok: true, orderId })
  } catch {
    return jsonResponse({ message: 'Email delivery failed' }, { status: 502 })
  }
}
