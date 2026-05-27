export type Locale = 'vi' | 'en'

export type ProductKind = 'board' | 'pieces' | 'set' | 'accessory' | 'book'

export type ProductContent = {
  name: string
  shortDescription: string
  description: string
  material: string
  dimensions: string
  details: string[]
}

export type Product = {
  id: string
  slug: string
  priceVnd: number
  image: string
  imageAlt: Record<Locale, string>
  visual: {
    kind: ProductKind
    mark: string
    wood: string
    woodDark: string
  }
  vi: ProductContent
  en: ProductContent
}

export type CartItem = {
  productId: string
  quantity: number
}

export type TimelineKind = 'blog' | 'promotion'

export type TimelineContent = {
  title: string
  excerpt: string
  body: string[]
  details?: string[]
  terms?: string[]
  ctaLabel?: string
  category?: string
  author?: string
  readTime?: string
  seoTitle?: string
  seoDescription?: string
  eventLabel?: string
  eventDate?: string
  eventTime?: string
  eventLocation?: string
  eventStatus?: string
}

export type TimelineItem = {
  id: string
  kind: TimelineKind
  slug: string
  date: string
  ctaTarget?: 'products' | 'contact'
  visual: {
    mark: string
    tone: string
    toneDark: string
    accent: string
  }
  vi: TimelineContent
  en: TimelineContent
}
