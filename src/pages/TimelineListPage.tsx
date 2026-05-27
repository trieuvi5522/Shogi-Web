import { TimelineCard } from '../components/TimelineCard'
import { copy } from '../data/copy'
import { blogPostPath, promotionPath } from '../lib/routes'
import type { Locale, TimelineItem, TimelineKind } from '../types'

type TimelineListPageProps = {
  kind: TimelineKind
  locale: Locale
  items: TimelineItem[]
}

export function TimelineListPage({ kind, locale, items }: TimelineListPageProps) {
  const text = kind === 'blog' ? copy[locale].blog : copy[locale].promotions
  const getPath = kind === 'blog' ? blogPostPath : promotionPath

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
          <div className="timeline-grid">
            {items.map((item) => (
              <TimelineCard
                key={item.id}
                item={item}
                locale={locale}
                to={getPath(item, locale)}
                actionLabel={text.readMore}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
