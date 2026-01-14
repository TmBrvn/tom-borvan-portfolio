import type { MetadataRoute } from 'next'
import { siteConfig } from './config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date('2025-01-14'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
