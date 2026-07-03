import glob from 'fast-glob'

async function loadEntries(directory, metaName, options = {}) {
  const contentDir = options.contentDir ?? directory
  const routeBase = options.routeBase ?? `/${directory}`
  const contentPattern = options.contentPattern ?? '**/page.mdx'
  const locale = options.locale

  return (
    await Promise.all(
      (await glob(contentPattern, { cwd: `src/app/${contentDir}` })).map(
        async (filename) => {
          const localizedFilename =
            locale && locale !== 'en'
              ? filename.replace(/content\.mdx$/, `content.${locale}.mdx`)
              : filename

          let entry
          try {
            entry = await import(`../app/${contentDir}/${localizedFilename}`)
          } catch {
            entry = await import(`../app/${contentDir}/${filename}`)
          }

          let metadata = entry[metaName]
          return {
            ...metadata,
            metadata,
            href: `${routeBase}/${filename.replace(/\/(?:page|content)\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

export function loadArticles(locale) {
  return loadEntries('blog', 'article', {
    contentDir: '[locale]/blog',
    routeBase: '/blog',
    contentPattern: '**/content.mdx',
    locale,
  })
}

export function loadCaseStudies() {
  return loadEntries('work', 'caseStudy')
}
