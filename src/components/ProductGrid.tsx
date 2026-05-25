import type { Locale, Product } from '../types'
import { ProductCard } from './ProductCard'

type ProductGridProps = {
  products: Product[]
  locale: Locale
  onAddToCart: () => void
}

export function ProductGrid({ products, locale, onAddToCart }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} locale={locale} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
