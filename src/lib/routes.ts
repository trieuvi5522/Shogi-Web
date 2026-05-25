import type { Locale, Product } from '../types'

export function getLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'vi'
}

export function homePath(locale: Locale) {
  return locale === 'vi' ? '/' : '/en'
}

export function productsPath(locale: Locale) {
  return locale === 'vi' ? '/san-pham' : '/en/products'
}

export function contactPath(locale: Locale) {
  return locale === 'vi' ? '/contact' : '/en/contact'
}

export function productPath(product: Product, locale: Locale) {
  return locale === 'vi' ? `/san-pham/${product.slug}` : `/en/products/${product.slug}`
}

export function switchLocalePath(pathname: string, currentLocale: Locale) {
  if (currentLocale === 'vi') {
    if (pathname === '/') return '/en'
    if (pathname === '/san-pham') return '/en/products'
    if (pathname.startsWith('/san-pham/')) return pathname.replace('/san-pham/', '/en/products/')
    if (pathname === '/contact') return '/en/contact'
    return '/en'
  }

  if (pathname === '/en') return '/'
  if (pathname === '/en/products') return '/san-pham'
  if (pathname.startsWith('/en/products/')) return pathname.replace('/en/products/', '/san-pham/')
  if (pathname === '/en/contact') return '/contact'
  return '/'
}
