import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../lib/format'
import type { Locale, TimelineItem } from '../types'
import { ContentVisual } from './ContentVisual'

type TimelineCardProps = {
  item: TimelineItem
  locale: Locale
  to: string
  actionLabel: string
}

export function TimelineCard({ item, locale, to, actionLabel }: TimelineCardProps) {
  const content = item[locale]

  return (
    <Link className="timeline-card" to={to}>
      <ContentVisual item={item} />
      <div className="timeline-card-body">
        <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
        <h3>{content.title}</h3>
        <p>{content.excerpt}</p>
        <span className="timeline-card-action">
          {actionLabel}
          <ArrowRight size={17} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
