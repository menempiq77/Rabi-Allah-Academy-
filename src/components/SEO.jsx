import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  keywords,
  path = '',
  lang = 'en',
  image,
  alternates,
  type = 'website',
}) {
  const siteUrl = 'https://rabiallah.com'
  const localizedPath = lang === 'ar' && path && path !== '/ar' && !path.startsWith('/ar/')
    ? path === '/' ? '/ar' : `/ar${path}`
    : path
  const url = localizedPath ? `${siteUrl}${localizedPath}` : siteUrl
  const imageUrl = image
    ? /^(https?:)?\/\//.test(image)
      ? image
      : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`
    : null
  const englishPath = alternates?.find(({ hrefLang }) => hrefLang === 'en')?.path
  const alternateLinks = alternates
    ? [
        ...alternates,
        ...(englishPath
          ? [{ hrefLang: 'x-default', path: englishPath }]
          : []),
      ]
    : []

  return (
    <Helmet>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title ? `${title} | Rabi Allah Islamic Academy` : 'Rabi Allah Islamic Academy – From Learning to Living Islam'}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || 'Rabi Allah Islamic Academy'} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:title" content={title || 'Rabi Allah Islamic Academy'} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta name="twitter:card" content="summary_large_image" />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {alternateLinks.map(({ hrefLang, path: alternatePath }) => (
        <link
          key={hrefLang}
          rel="alternate"
          hrefLang={hrefLang}
          href={`${siteUrl}${alternatePath}`}
        />
      ))}
    </Helmet>
  )
}
