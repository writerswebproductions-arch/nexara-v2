import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.writerswebproduction.com'

  const staticRoutes = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/category/news',
    '/category/sports',
    '/category/entertainment',
    '/category/politics',
    '/category/technology',
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
