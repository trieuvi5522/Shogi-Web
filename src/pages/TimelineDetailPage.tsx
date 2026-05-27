import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContentVisual } from '../components/ContentVisual'
import { copy } from '../data/copy'
import { formatDate } from '../lib/format'
import { blogPath, contactPath, productsPath, promotionsPath } from '../lib/routes'
import { useArticleSeo } from '../lib/seo'
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
  const content = item?.[locale]

  useArticleSeo(
    item && content && kind === 'blog'
      ? {
          title: content.seoTitle ?? content.title,
          description: content.seoDescription ?? content.excerpt,
          url: typeof window === 'undefined' ? '' : window.location.href,
          publishedAt: item.date,
          author: content.author ?? 'Otter Shogi',
          locale,
        }
      : null,
  )

  if (!item || !content) {
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

  const isPromotion = kind === 'promotion'
  const finalCtaPath = item.ctaTarget === 'contact' ? contactPath(locale) : productsPath(locale)

  if (kind === 'blog') {
    return (
      <article className="blog-article">
        <section
          className="blog-article-hero"
          style={{
            '--content-tone': item.visual.tone,
            '--content-tone-dark': item.visual.toneDark,
            '--content-accent': item.visual.accent,
          } as CSSProperties}
        >
          <div className="container blog-article-hero-inner">
            <div className="blog-article-hero-copy">
              <div className="breadcrumbs">
                <Link to={listPath}>{text.back}</Link>
                <span>/</span>
                <span>{content.category ?? copy[locale].blog.kicker}</span>
              </div>
              <p className="section-kicker">{content.category ?? copy[locale].blog.kicker}</p>
              <h1>{content.title}</h1>
              <p className="blog-article-lede">{content.excerpt}</p>
              <div className="blog-article-meta">
                <span>{content.author ?? 'Otter Shogi'}</span>
                <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
                <span>{content.readTime ?? (locale === 'vi' ? '3 phút đọc' : '3 min read')}</span>
              </div>
            </div>
            <ContentVisual item={item} size="large" />
          </div>
        </section>

        <section className="section blog-article-section">
          <div className="container blog-article-layout">
            <div className="blog-article-content">
              {content.body.map((paragraph, index) => (
                <p className={index === 0 ? 'blog-article-intro' : undefined} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {content.details?.length ? (
                <section className="blog-article-block">
                  <h2>{copy[locale].blog.highlights}</h2>
                  <ul className="detail-list">
                    {content.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <aside className="blog-article-aside" aria-label={content.eventLabel}>
              <p className="section-kicker">{content.eventLabel ?? copy[locale].blog.kicker}</p>
              <h2>{locale === 'vi' ? 'Thông tin nhanh' : 'Quick Info'}</h2>
              <dl className="event-facts">
                <div>
                  <dt>{locale === 'vi' ? 'Ngày' : 'Date'}</dt>
                  <dd>{content.eventDate ?? formatDate(item.date, locale)}</dd>
                </div>
                <div>
                  <dt>{locale === 'vi' ? 'Thời gian' : 'Time'}</dt>
                  <dd>{content.eventTime ?? (locale === 'vi' ? 'Cập nhật sau' : 'To be updated')}</dd>
                </div>
                <div>
                  <dt>{locale === 'vi' ? 'Địa điểm' : 'Location'}</dt>
                  <dd>{content.eventLocation ?? 'Otter Shogi'}</dd>
                </div>
                <div>
                  <dt>{locale === 'vi' ? 'Trạng thái' : 'Status'}</dt>
                  <dd>{content.eventStatus ?? (locale === 'vi' ? 'Đã đăng' : 'Published')}</dd>
                </div>
              </dl>
              <Link className="button" to={contactPath(locale)}>
                {locale === 'vi' ? 'Liên hệ tham gia' : 'Contact to join'}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button-ghost" to={listPath}>
                <ArrowLeft size={17} aria-hidden="true" />
                {text.backToList}
              </Link>
            </aside>
          </div>
        </section>
      </article>
    )
  }

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
