import type { CSSProperties } from 'react'
import type { Locale, Product } from '../types'

type ProductImageProps = {
  product: Product
  locale: Locale
  size?: 'card' | 'large' | 'small'
}

export function ProductImage({ product, locale, size = 'card' }: ProductImageProps) {
  const style = {
    '--wood': product.visual.wood,
    '--wood-dark': product.visual.woodDark,
  } as CSSProperties

  return (
    <div
      className={`product-image product-image-${size} product-image-kind-${product.visual.kind}`}
      style={style}
      role="img"
      aria-label={product.imageAlt[locale]}
    >
      <span className="product-piece">{product.visual.mark}</span>
      <span className="product-piece">{product.visual.mark}</span>
      <span className="product-piece">{product.visual.mark}</span>
    </div>
  )
}
