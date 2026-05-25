import { ArrowRight, Mail, PackageCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import { ProductGrid } from '../components/ProductGrid'
import { copy } from '../data/copy'
import { featuredProducts } from '../data/products'
import { contactPath, productsPath } from '../lib/routes'
import type { Locale } from '../types'

type HomePageProps = {
  locale: Locale
  onAddToCart: () => void
}

export function HomePage({ locale, onAddToCart }: HomePageProps) {
  const text = copy[locale].home

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(24, 17, 12, 0.82), rgba(24, 17, 12, 0.34) 52%, rgba(24, 17, 12, 0.1)), url(${heroImage})`,
        }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>{text.title}</h1>
            <p className="hero-copy">{text.intro}</p>
            <div className="hero-actions">
              <Link className="button" to={productsPath(locale)}>
                {text.shopNow}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="button-secondary" to={contactPath(locale)}>
                <Mail size={18} aria-hidden="true" />
                {text.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-kicker">{text.featuredKicker}</p>
              <h2 className="section-title">{text.featuredTitle}</h2>
              <p className="section-copy">{text.featuredCopy}</p>
            </div>
            <div className="section-actions">
              <Link className="button-ghost" to={productsPath(locale)}>
                {text.viewAll}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ProductGrid products={featuredProducts} locale={locale} onAddToCart={onAddToCart} />
        </div>
      </section>

      <section className="section story-band">
        <div className="container story-grid">
          <div>
            <p className="section-kicker">{text.storyKicker}</p>
            <h2 className="section-title">{text.storyTitle}</h2>
            <p className="section-copy story-copy">{text.storyCopy}</p>
          </div>
          <ul className="feature-list">
            {text.storyPoints.map((point) => (
              <li key={point}>
                <PackageCheck size={21} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
            <li>
              <Sparkles size={21} aria-hidden="true" />
              <span>Otter Shogi</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
