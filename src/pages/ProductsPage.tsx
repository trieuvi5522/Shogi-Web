import { ProductGrid } from '../components/ProductGrid'
import { copy } from '../data/copy'
import { products } from '../data/products'
import type { Locale } from '../types'

type ProductsPageProps = {
  locale: Locale
  onAddToCart: () => void
}

export function ProductsPage({ locale, onAddToCart }: ProductsPageProps) {
  const text = copy[locale].products

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">{text.kicker}</p>
          <h1 className="section-title">{text.title}</h1>
          <p className="section-copy">{text.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ProductGrid products={products} locale={locale} onAddToCart={onAddToCart} />
        </div>
      </section>
    </>
  )
}
