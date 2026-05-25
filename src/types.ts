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
