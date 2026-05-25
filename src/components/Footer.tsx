import { copy } from '../data/copy'
import type { Locale } from '../types'

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear()
  const text = copy[locale]

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">Otter Shogi</div>
          <div>{text.footer.line}</div>
        </div>
        <div>{year}</div>
      </div>
    </footer>
  )
}
