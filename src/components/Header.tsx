import { Globe2, ShoppingBag } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../cart/cart'
import { copy } from '../data/copy'
import { blogPath, contactPath, homePath, productsPath, promotionsPath, switchLocalePath } from '../lib/routes'
import type { Locale } from '../types'

type HeaderProps = {
  locale: Locale
  onCartOpen: () => void
}

export function Header({ locale, onCartOpen }: HeaderProps) {
  const location = useLocation()
  const { totalItems } = useCart()
  const text = copy[locale]

  const navItems = [
    { to: homePath(locale), label: text.nav.home, end: true },
    { to: productsPath(locale), label: text.nav.products, end: false },
    { to: blogPath(locale), label: text.nav.blog, end: false },
    { to: promotionsPath(locale), label: text.nav.promotions, end: false },
    { to: contactPath(locale), label: text.nav.contact, end: false },
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to={homePath(locale)}>
          <span className="brand-mark">OS</span>
          <span>Otter Shogi</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="language-switch" to={switchLocalePath(location.pathname, locale)}>
            <Globe2 size={17} aria-hidden="true" />
            {text.nav.language}
          </Link>
          <button className="cart-button" type="button" onClick={onCartOpen} aria-label={text.nav.cart}>
            <ShoppingBag size={20} aria-hidden="true" />
            {totalItems > 0 ? <span className="cart-count">{totalItems}</span> : null}
          </button>
        </div>
      </div>
    </header>
  )
}
