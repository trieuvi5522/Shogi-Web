import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/cart'
import { copy } from '../data/copy'
import { formatVnd } from '../lib/format'
import { productPath } from '../lib/routes'
import type { Locale, Product } from '../types'
import { ProductImage } from './ProductImage'

type ProductCardProps = {
  product: Product
  locale: Locale
  onAddToCart: () => void
}

export function ProductCard({ product, locale, onAddToCart }: ProductCardProps) {
  const { addItem } = useCart()
  const text = copy[locale]
  const content = product[locale]

  return (
    <Link className="product-card" to={productPath(product, locale)} aria-label={`${text.products.details}: ${content.name}`}>
      <ProductImage product={product} locale={locale} />
      <div className="product-card-body">
        <h3>{content.name}</h3>
        <p className="product-description">{content.shortDescription}</p>
        <p className="price">{formatVnd(product.priceVnd)}</p>
        <button
          className="button"
          type="button"
          onClick={(event) => {
            event.preventDefault()
            addItem(product.id)
            onAddToCart()
          }}
        >
          <ShoppingBag size={18} aria-hidden="true" />
          {text.products.add}
        </button>
      </div>
    </Link>
  )
}
