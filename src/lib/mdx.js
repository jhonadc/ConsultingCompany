import glob from 'fast-glob'

async function loadEntries(directory, metaName, options = {}) {
  const contentDir = options.contentDir ?? directory
  const routeBase = options.routeBase ?? `/${directory}`
  const contentPattern = options.contentPattern ?? '**/page.mdx'

  return (
    await Promise.all(
      (await glob(contentPattern, { cwd: `src/app/${contentDir}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${contentDir}/${filename}`))[
            metaName
          ]
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

export function loadArticles() {
  return loadEntries('blog', 'article', {
    contentDir: '[locale]/blog',
    routeBase: '/blog',
    contentPattern: '**/content.mdx',
  })
}

export function loadCaseStudies() {
  return loadEntries('work', 'caseStudy')
}
