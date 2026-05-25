import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { FormEvent, MouseEvent } from 'react'
import { useCart } from '../cart/cart'
import { copy } from '../data/copy'
import { products } from '../data/products'
import { formatVnd } from '../lib/format'
import type { Locale, Product } from '../types'
import { ProductImage } from './ProductImage'

type CartDrawerProps = {
  isOpen: boolean
  locale: Locale
  onClose: () => void
}

type CheckoutForm = {
  name: string
  phone: string
  email: string
  address: string
  note: string
}

type CartLine = {
  product: Product
  quantity: number
}

const emptyForm: CheckoutForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  note: '',
}

export function CartDrawer({ isOpen, locale, onClose }: CartDrawerProps) {
  const { cart, clearCart, removeItem, setQuantity } = useCart()
  const text = copy[locale].cart
  const [form, setForm] = useState<CheckoutForm>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [isOpen, onClose])

  const lines = useMemo<CartLine[]>(() => {
    return cart.flatMap((item) => {
      const product = products.find((candidate) => candidate.id === item.productId)
      return product ? [{ product, quantity: item.quantity }] : []
    })
  }, [cart])

  const subtotal = lines.reduce((sum, line) => sum + line.product.priceVnd * line.quantity, 0)
  const statusMessage = status === 'success' ? text.success : status === 'error' ? text.error : ''
  const statusClass = status === 'success' ? 'status status-success' : status === 'error' ? 'status status-error' : 'status'

  if (!isOpen) return null

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setStatus('idle')
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!lines.length || status === 'loading') return

    setStatus('loading')

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale,
          customer: form,
          items: lines.map((line) => ({
            id: line.product.id,
            slug: line.product.slug,
            name: line.product[locale].name,
            priceVnd: line.product.priceVnd,
            quantity: line.quantity,
          })),
          totalVnd: subtotal,
        }),
      })

      if (!response.ok) throw new Error('Order submission failed')

      clearCart()
      setForm(emptyForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="cart-overlay" onClick={handleBackdropClick}>
      <aside className="cart-drawer" aria-label={text.title}>
        <div className="cart-header">
          <h2>{text.title}</h2>
          <button className="icon-button" type="button" onClick={onClose} aria-label={text.close}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="cart-body">
          {lines.length === 0 ? (
            <div className="cart-empty">
              <div>
                <p>{text.empty}</p>
                {statusMessage ? <p className={statusClass}>{statusMessage}</p> : null}
              </div>
            </div>
          ) : (
            <>
              {lines.map((line) => (
                <div className="cart-line" key={line.product.id}>
                  <ProductImage product={line.product} locale={locale} size="small" />
                  <div>
                    <h3>{line.product[locale].name}</h3>
                    <p className="price">{formatVnd(line.product.priceVnd)}</p>
                    <div className="cart-line-actions">
                      <div className="quantity-control" aria-label={text.quantity}>
                        <button type="button" onClick={() => setQuantity(line.product.id, line.quantity - 1)}>
                          <Minus size={16} aria-hidden="true" />
                        </button>
                        <span>{line.quantity}</span>
                        <button type="button" onClick={() => setQuantity(line.product.id, line.quantity + 1)}>
                          <Plus size={16} aria-hidden="true" />
                        </button>
                      </div>
                      <button className="button-ghost" type="button" onClick={() => removeItem(line.product.id)}>
                        <Trash2 size={16} aria-hidden="true" />
                        {text.remove}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cart-summary">
                <span>{text.subtotal}</span>
                <span>{formatVnd(subtotal)}</span>
              </div>
              <form className="checkout-panel checkout-form" onSubmit={handleSubmit}>
                <h2>{text.checkout}</h2>
                <div className="form-grid">
                  <label className="field">
                    <span>{text.name}</span>
                    <input required value={form.name} onChange={(event) => updateField('name', event.target.value)} />
                  </label>
                  <label className="field">
                    <span>{text.phone}</span>
                    <input required value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
                  </label>
                </div>
                <label className="field">
                  <span>{text.email}</span>
                  <input required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
                </label>
                <label className="field">
                  <span>{text.address}</span>
                  <input required value={form.address} onChange={(event) => updateField('address', event.target.value)} />
                </label>
                <label className="field">
                  <span>{text.note}</span>
                  <textarea value={form.note} onChange={(event) => updateField('note', event.target.value)} />
                </label>
                {statusMessage ? <p className={statusClass}>{statusMessage}</p> : null}
                <button className="button" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? text.sending : text.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}
