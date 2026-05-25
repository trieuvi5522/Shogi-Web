import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { copy } from '../data/copy'
import type { Locale } from '../types'

type ContactPageProps = {
  locale: Locale
}

type ContactForm = {
  name: string
  email: string
  message: string
}

const emptyContactForm: ContactForm = {
  name: '',
  email: '',
  message: '',
}

export function ContactPage({ locale }: ContactPageProps) {
  const text = copy[locale].contact
  const [form, setForm] = useState<ContactForm>(emptyContactForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const statusMessage = status === 'success' ? text.success : status === 'error' ? text.error : ''
  const statusClass = status === 'success' ? 'status status-success' : status === 'error' ? 'status status-error' : 'status'

  const updateField = (field: keyof ContactForm, value: string) => {
    setStatus('idle')
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'loading') return

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale, formType: 'contact', ...form }),
      })

      if (!response.ok) throw new Error('Contact submission failed')

      setForm(emptyContactForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-copy">{text.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <h2>{text.infoTitle}</h2>
            <div className="info-row">
              <Mail size={20} aria-hidden="true" />
              <span>{text.email}</span>
            </div>
            <div className="info-row">
              <Phone size={20} aria-hidden="true" />
              <span>{text.phone}</span>
            </div>
            <div className="info-row">
              <MapPin size={20} aria-hidden="true" />
              <span>{text.address}</span>
            </div>
            <div className="info-row">
              <Clock size={20} aria-hidden="true" />
              <span>{text.hours}</span>
            </div>
          </div>
          <form className="contact-panel contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>{text.name}</span>
              <input required value={form.name} onChange={(event) => updateField('name', event.target.value)} />
            </label>
            <label className="field">
              <span>{text.contactEmail}</span>
              <input required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
            </label>
            <label className="field">
              <span>{text.message}</span>
              <textarea required value={form.message} onChange={(event) => updateField('message', event.target.value)} />
            </label>
            {statusMessage ? <p className={statusClass}>{statusMessage}</p> : null}
            <button className="button" type="submit" disabled={status === 'loading'}>
              <Send size={18} aria-hidden="true" />
              {status === 'loading' ? text.sending : text.submit}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
