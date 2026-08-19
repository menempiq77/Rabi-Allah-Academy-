import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, keywords, path = '' }) {
  const siteUrl = 'https://rabiallah.com'
  const url = path ? `${siteUrl}${path}` : siteUrl

  return (
    <Helmet>
      <title>{title ? `${title} | Rabi Allah Islamic Academy` : 'Rabi Allah Islamic Academy – From Learning to Living Islam'}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || 'Rabi Allah Islamic Academy'} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title || 'Rabi Allah Islamic Academy'} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
