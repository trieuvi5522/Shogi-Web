import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ContentVisual } from '../components/ContentVisual'
import { copy } from '../data/copy'
import { formatDate } from '../lib/format'
import { blogPath, contactPath, productsPath, promotionsPath } from '../lib/routes'
import type { Locale, TimelineItem, TimelineKind } from '../types'

type TimelineDetailPageProps = {
  kind: TimelineKind
  locale: Locale
  getItem: (slug: string | undefined) => TimelineItem | undefined
}

export function TimelineDetailPage({ kind, locale, getItem }: TimelineDetailPageProps) {
  const { slug } = useParams()
  const item = getItem(slug)
  const text = kind === 'blog' ? copy[locale].blog : copy[locale].promotions
  const listPath = kind === 'blog' ? blogPath(locale) : promotionsPath(locale)

  if (!item) {
    return (
      <section className="not-found">
        <div className="container">
          <h1 className="section-title">{text.notFound}</h1>
          <p className="section-copy">
            <Link to={listPath}>{text.backToList}</Link>
          </p>
        </div>
      </section>
    )
  }

  const content = item[locale]
  const isPromotion = kind === 'promotion'
  const finalCtaPath = item.ctaTarget === 'contact' ? contactPath(locale) : productsPath(locale)

  return (
    <article className="section">
      <div className="container timeline-detail-layout">
        <ContentVisual item={item} size="large" />
        <div className="detail-panel timeline-detail-panel">
          <div className="breadcrumbs">
            <Link to={listPath}>{text.back}</Link>
            <span>/</span>
            <span>{content.title}</span>
          </div>
          <time className="timeline-date" dateTime={item.date}>
            {formatDate(item.date, locale)}
          </time>
          <h1>{content.title}</h1>
          <p className="section-copy">{content.excerpt}</p>
          <div className="timeline-body">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {content.details?.length ? (
            <>
              <h2>{copy[locale].blog.highlights}</h2>
              <ul className="detail-list">
                {content.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </>
          ) : null}
          {content.terms?.length ? (
            <>
              <h2>{copy[locale].promotions.terms}</h2>
              <ul className="detail-list">
                {content.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </>
          ) : null}
          <div className="timeline-detail-actions">
            <Link className="button-ghost" to={listPath}>
              <ArrowLeft size={17} aria-hidden="true" />
              {text.backToList}
            </Link>
            {isPromotion ? (
              <Link className="button" to={finalCtaPath}>
                {content.ctaLabel ?? copy[locale].promotions.defaultCta}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
