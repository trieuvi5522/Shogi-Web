/// <reference types="@cloudflare/workers-types" />

export type Env = {
  RESEND_API_KEY?: string
  RESEND_FROM_EMAIL?: string
  SHOP_OWNER_EMAIL?: string
}

type EmailInput = {
  subject: string
  text: string
  html: string
}

const baseHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      ...baseHeaders,
      ...(init.headers ?? {}),
    },
  })
}

export function optionsResponse() {
  return new Response(null, { status: 204, headers: baseHeaders })
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export function formatVnd(value: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(value)
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export async function readJson(request: Request) {
  try {
    return await request.json()
  } catch {
    return null
  }
}

export async function sendShopEmail(env: Env, input: EmailInput) {
  if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.SHOP_OWNER_EMAIL) {
    throw new Error('Missing Resend environment configuration')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL,
      to: [env.SHOP_OWNER_EMAIL],
      subject: input.subject,
      text: input.text,
      html: input.html,
    }),
  })

  if (!response.ok) {
    const detail = await response.text()
    console.error('Resend send failed', detail)
    throw new Error('Resend send failed')
  }

  return response.json()
}
