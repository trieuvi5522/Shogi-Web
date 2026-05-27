import { useEffect } from 'react'

type ArticleSeoInput = {
  title: string
  description: string
  url: string
  publishedAt: string
  author: string
  locale: 'vi' | 'en'
}

function ensureMeta(name: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.append(meta)
  }
  return meta
}

function ensurePropertyMeta(property: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.append(meta)
  }
  return meta
}

export function useArticleSeo(input: ArticleSeoInput | null) {
  useEffect(() => {
    if (!input) return

    const previousTitle = document.title
    const descriptionMeta = ensureMeta('description')
    const previousDescription = descriptionMeta.content
    const robotsMeta = ensureMeta('robots')
    const previousRobots = robotsMeta.content
    const ogTitle = ensurePropertyMeta('og:title')
    const previousOgTitle = ogTitle.content
    const ogDescription = ensurePropertyMeta('og:description')
    const previousOgDescription = ogDescription.content
    const ogType = ensurePropertyMeta('og:type')
    const previousOgType = ogType.content

    const jsonLd = document.createElement('script')
    jsonLd.type = 'application/ld+json'
    jsonLd.dataset.otterSeo = 'article'
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: input.title,
      description: input.description,
      datePublished: input.publishedAt,
      dateModified: input.publishedAt,
      author: {
        '@type': 'Organization',
        name: input.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Otter Shogi',
      },
      inLanguage: input.locale === 'vi' ? 'vi-VN' : 'en-US',
      mainEntityOfPage: input.url,
    })

    document.title = `${input.title} | Otter Shogi`
    descriptionMeta.content = input.description
    robotsMeta.content = 'index, follow'
    ogTitle.content = input.title
    ogDescription.content = input.description
    ogType.content = 'article'
    document.head.append(jsonLd)

    return () => {
      document.title = previousTitle
      descriptionMeta.content = previousDescription
      robotsMeta.content = previousRobots
      ogTitle.content = previousOgTitle
      ogDescription.content = previousOgDescription
      ogType.content = previousOgType
      jsonLd.remove()
    }
  }, [input])
}
