import type { CSSProperties } from 'react'
import type { TimelineItem } from '../types'

type ContentVisualProps = {
  item: TimelineItem
  size?: 'card' | 'large'
}

export function ContentVisual({ item, size = 'card' }: ContentVisualProps) {
  const style = {
    '--content-tone': item.visual.tone,
    '--content-tone-dark': item.visual.toneDark,
    '--content-accent': item.visual.accent,
  } as CSSProperties

  return (
    <div className={`content-visual content-visual-${size}`} style={style} aria-hidden="true">
      <span className="content-visual-mark">{item.visual.mark}</span>
      <span className="content-visual-line" />
      <span className="content-visual-seal">OS</span>
    </div>
  )
}
