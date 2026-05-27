import type { Locale, Product, TimelineItem } from '../types'

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

export function blogPath(locale: Locale) {
  return locale === 'vi' ? '/hoat-dong' : '/en/blog'
}

export function blogPostPath(item: TimelineItem, locale: Locale) {
  return locale === 'vi' ? `/hoat-dong/${item.slug}` : `/en/blog/${item.slug}`
}

export function promotionsPath(locale: Locale) {
  return locale === 'vi' ? '/uu-dai' : '/en/promotions'
}

export function promotionPath(item: TimelineItem, locale: Locale) {
  return locale === 'vi' ? `/uu-dai/${item.slug}` : `/en/promotions/${item.slug}`
}

export function productPath(product: Product, locale: Locale) {
  return locale === 'vi' ? `/san-pham/${product.slug}` : `/en/products/${product.slug}`
}

export function switchLocalePath(pathname: string, currentLocale: Locale) {
  if (currentLocale === 'vi') {
    if (pathname === '/') return '/en'
    if (pathname === '/san-pham') return '/en/products'
    if (pathname.startsWith('/san-pham/')) return pathname.replace('/san-pham/', '/en/products/')
    if (pathname === '/hoat-dong') return '/en/blog'
    if (pathname.startsWith('/hoat-dong/')) return pathname.replace('/hoat-dong/', '/en/blog/')
    if (pathname === '/uu-dai') return '/en/promotions'
    if (pathname.startsWith('/uu-dai/')) return pathname.replace('/uu-dai/', '/en/promotions/')
    if (pathname === '/contact') return '/en/contact'
    return '/en'
  }

  if (pathname === '/en') return '/'
  if (pathname === '/en/products') return '/san-pham'
  if (pathname.startsWith('/en/products/')) return pathname.replace('/en/products/', '/san-pham/')
  if (pathname === '/en/blog') return '/hoat-dong'
  if (pathname.startsWith('/en/blog/')) return pathname.replace('/en/blog/', '/hoat-dong/')
  if (pathname === '/en/promotions') return '/uu-dai'
  if (pathname.startsWith('/en/promotions/')) return pathname.replace('/en/promotions/', '/uu-dai/')
  if (pathname === '/en/contact') return '/contact'
  return '/'
}
