import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "@zzzkan/gatsby-starter-blog",
    siteUrl: "https://zzzkan-gatsby-starter-blog.netlify.app/",
    description: "gatsby-starter-blog by @zzzkan.",
    author: "zzzkan",
    publicationYear: 2023,
    imageUrl: "https://zzzkan-gatsby-starter-blog.netlify.app/banner.png",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "@zzzkan/gatsby-theme-blog",
      options: {
        lang: "en",
        basePath: "/",
        contentPath: "contents/posts",
        dateFormatString: "MMMM DD, YYYY",
        links: [
          {
            name: "Profile",
            url: "/",
          },
          {
            name: "RSS",
            url: "/",
          },
          {
            name: "GitHub",
            url: "https://github.com/zzzkan",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/_zzzkan",
          },
        ],
      },
    },
  ],
}

export default config
