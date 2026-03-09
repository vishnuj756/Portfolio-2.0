import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  hreflang = 'en',
  gaTrackingId,
}) => {
  const canonicalUrl =
    url || `https://vishalshivhare.netlify.app${window.location.pathname}`;

  const schemaType =
    type === 'website'
      ? 'WebSite'
      : type === 'article'
      ? 'Article'
      : type === 'profile'
      ? 'Person'
      : type;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: title,
    description,
    url: canonicalUrl,
  };

  if (image) {
    jsonLd.image = image;
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Vishal Sivhare" />
      <link rel="canonical" href={canonicalUrl} />
      {/* signal language for crawlers */}
      <link rel="alternate" href={canonicalUrl} hreflang={hreflang || "en"} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      {image && <meta name="twitter:image" content={image} />}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Google Analytics snippet if tracking id provided */}
      {gaTrackingId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
          <script>
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', '${gaTrackingId}');`}
          </script>
        </>
      )}
    </Helmet>
  );
};

export default Seo;
