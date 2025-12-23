export const metadata = {
  title: 'Product Listing Page | Appscrip',
  description: 'Browse our curated product listing page with filters and responsive design.',
}

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Product Listing",
    "itemListElement": []
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
