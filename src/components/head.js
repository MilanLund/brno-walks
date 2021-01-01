import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {

  const title = 'Procházky v okolí Brna'
  const metaDescription = 'Lorem ipsum'

  return (
    <Helmet
      htmlAttributes={{
        lang: 'cs'
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
    </Helmet>
  )
}

export default Head
