import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { CartItem } from '../types'
import { CartContext, type CartContextValue } from './cart'

const CART_KEY = 'otter-shogi-cart-v1'

function readCart() {
  if (typeof window === 'undefined') return []

  try {
    const parsed = JSON.parse(window.localStorage.getItem(CART_KEY) ?? '[]')
    if (!Array.isArray(parsed)) return []

    return parsed
      .filter((item): item is CartItem => {
        return (
          typeof item === 'object' &&
          item !== null &&
          typeof item.productId === 'string' &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0
        )
      })
      .map((item) => ({ productId: item.productId, quantity: Math.min(item.quantity, 99) }))
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(readCart)

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const value = useMemo<CartContextValue>(() => {
    return {
      cart,
      totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
      addItem(productId) {
        setCart((current) => {
          const existing = current.find((item) => item.productId === productId)
          if (existing) {
            return current.map((item) =>
              item.productId === productId ? { ...item, quantity: Math.min(item.quantity + 1, 99) } : item,
            )
          }

          return [...current, { productId, quantity: 1 }]
        })
      },
      setQuantity(productId, quantity) {
        setCart((current) =>
          current
            .map((item) =>
              item.productId === productId ? { ...item, quantity: Math.min(Math.max(quantity, 1), 99) } : item,
            )
            .filter((item) => item.quantity > 0),
        )
      },
      removeItem(productId) {
        setCart((current) => current.filter((item) => item.productId !== productId))
      },
      clearCart() {
        setCart([])
      },
    }
  }, [cart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
