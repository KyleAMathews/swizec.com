import React from "react"
import { Helmet } from "react-helmet"

export default (props) => {
  const title = [
    props.pageContext.frontmatter && props.pageContext.frontmatter.title,
    "Swizec.com",
  ]
    .filter(Boolean)
    .join(" | ")
  const description =
    props.pageContext.description && props.pageContext.frontmatter.description

  const image = `https://swizec.com${
    props.image || "/serverlessreact-cover.png"
  }`
  const url = `https://swizec.com${
    props.pageName !== undefined ? `/${props.pageName}` : ""
  }`

  return (
    <Helmet
      htmlAttributes={{
        lang: "en-us",
      }}
    >
      <title> {title} </title>
      <link rel="icon" href="/icon.png" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@swizec" />
      <meta name="twitter:title" content={title} />{" "}
      <meta name="twitter:description" content={description} />{" "}
      <meta name="twitter:image" content={image} />
      <meta property="og:title" content={title} />{" "}
      <meta property="og:url" content={url} />{" "}
      <meta property="og:image" content={image} />
    </Helmet>
  )
}
