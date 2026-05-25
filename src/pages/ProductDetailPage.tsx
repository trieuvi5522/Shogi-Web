import { ShoppingBag } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../cart/cart'
import { ProductImage } from '../components/ProductImage'
import { copy } from '../data/copy'
import { getProductBySlug } from '../data/products'
import { formatVnd } from '../lib/format'
import { productsPath } from '../lib/routes'
import type { Locale } from '../types'

type ProductDetailPageProps = {
  locale: Locale
  onAddToCart: () => void
}

export function ProductDetailPage({ locale, onAddToCart }: ProductDetailPageProps) {
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = getProductBySlug(slug)
  const text = copy[locale].detail

  if (!product) {
    return (
      <section className="not-found">
        <div className="container">
          <h1 className="section-title">{text.notFound}</h1>
          <p className="section-copy">
            <Link to={productsPath(locale)}>{text.backToProducts}</Link>
          </p>
        </div>
      </section>
    )
  }

  const content = product[locale]

  return (
    <section className="section">
      <div className="container detail-layout">
        <ProductImage product={product} locale={locale} size="large" />
        <article className="detail-panel">
          <div className="breadcrumbs">
            <Link to={productsPath(locale)}>{text.back}</Link>
            <span>/</span>
            <span>{content.name}</span>
          </div>
          <h1>{content.name}</h1>
          <p className="price">{formatVnd(product.priceVnd)}</p>
          <p className="section-copy">{content.description}</p>
          <div className="detail-meta">
            <div className="meta-box">
              <span>{text.material}</span>
              {content.material}
            </div>
            <div className="meta-box">
              <span>{text.dimensions}</span>
              {content.dimensions}
            </div>
          </div>
          <h2>{text.highlights}</h2>
          <ul className="detail-list">
            {content.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <button
            className="button"
            type="button"
            onClick={() => {
              addItem(product.id)
              onAddToCart()
            }}
          >
            <ShoppingBag size={18} aria-hidden="true" />
            {text.add}
          </button>
        </article>
      </div>
    </section>
  )
}
