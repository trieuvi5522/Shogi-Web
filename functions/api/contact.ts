/// <reference types="@cloudflare/workers-types" />

import { escapeHtml, isRecord, jsonResponse, optionsResponse, readJson, sendShopEmail, type Env } from '../_shared/email'

type ContactSubmission = {
  locale: 'vi' | 'en'
  name: string
  email: string
  message: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function cleanString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function validateContact(body: unknown): { ok: true; contact: ContactSubmission } | { ok: false; message: string } {
  if (!isRecord(body)) return { ok: false, message: 'Invalid JSON body' }

  const contact: ContactSubmission = {
    locale: body.locale === 'en' ? 'en' : 'vi',
    name: cleanString(body.name, 120),
    email: cleanString(body.email, 160),
    message: cleanString(body.message, 3000),
  }

  if (!contact.name || !contact.email || !contact.message) {
    return { ok: false, message: 'Missing required contact fields' }
  }

  if (!emailPattern.test(contact.email)) {
    return { ok: false, message: 'Invalid contact email' }
  }

  return { ok: true, contact }
}

function buildContactEmail(contact: ContactSubmission, contactId: string) {
  const text = [
    `New Otter Shogi contact submission: ${contactId}`,
    '',
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Language: ${contact.locale}`,
    '',
    contact.message,
  ].join('\n')

  const html = `
    <div style="font-family:Arial,sans-serif;color:#201813;line-height:1.5;">
      <h1 style="margin:0 0 16px;color:#4a281c;">New Otter Shogi contact submission</h1>
      <p><strong>Contact ID:</strong> ${escapeHtml(contactId)}</p>
      <p>
        <strong>Name:</strong> ${escapeHtml(contact.name)}<br>
        <strong>Email:</strong> ${escapeHtml(contact.email)}<br>
        <strong>Language:</strong> ${contact.locale}
      </p>
      <h2 style="color:#4a281c;">Message</h2>
      <p>${escapeHtml(contact.message).replaceAll('\n', '<br>')}</p>
    </div>
  `

  return { text, html }
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method === 'OPTIONS') return optionsResponse()

  if (request.method !== 'POST') {
    return jsonResponse({ message: 'Method not allowed' }, { status: 405, headers: { Allow: 'POST' } })
  }

  const validation = validateContact(await readJson(request))

  if (!validation.ok) {
    return jsonResponse({ message: validation.message }, { status: 400 })
  }

  const contactId = `CT-${Date.now().toString(36).toUpperCase()}`
  const email = buildContactEmail(validation.contact, contactId)

  try {
    await sendShopEmail(env, {
      subject: `[Otter Shogi] Contact message ${contactId}`,
      text: email.text,
      html: email.html,
    })

    return jsonResponse({ ok: true, contactId })
  } catch {
    return jsonResponse({ message: 'Email delivery failed' }, { status: 502 })
  }
}
