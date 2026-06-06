import { notFound } from 'next/navigation'
import glob from 'fast-glob'

import BlogArticleWrapper from '@/app/blog/wrapper'

async function loadArticle(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return null
  }

  try {
    const entry = await import(`../${slug}/content.mdx`)

    return {
      Component: entry.default,
      article: entry.article,
      metadata: entry.metadata,
    }
  } catch {
    return null
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  const articles = await glob('*/content.mdx', {
    cwd: 'src/app/[locale]/blog',
  })

  return articles.map((article) => ({
    slug: article.replace(/\/content\.mdx$/, ''),
  }))
}

export async function generateMetadata({ params }) {
  const entry = await loadArticle(params.slug)

  return entry?.metadata ?? {}
}

export default async function BlogPost({ params }) {
  const entry = await loadArticle(params.slug)
  if (!entry) notFound()

  const { Component, article } = entry

  return (
    <BlogArticleWrapper article={article}>
      <Component />
    </BlogArticleWrapper>
  )
}
