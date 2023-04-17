import type { GatsbyConfig } from "gatsby";

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
  trailingSlash: "always",
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
            url: "/rss.xml",
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
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "@zzzkan/gatsby-starter-blog",
        short_name: "@zzzkan/gatsby-starter-blog",
        start_url: "/",
        background_color: "#fff",
        display: "minimal-ui",
        icon: "contents/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: { site: Queries.Site; allPost: Queries.PostConnection };
            }) =>
              allPost.nodes.map((post) => {
                const url = new URL(
                  (post.slug + "/").replace(/\/\/+/g, "/"),
                  site?.siteMetadata?.siteUrl ?? ""
                ).href;
                return {
                  title: post.title,
                  date: post.updatedDate ?? post.publishedDate,
                  description: post.excerpt,
                  url,
                  guid: url,
                };
              }),
            query: `
              {
                allPost(sort: {publishedDate: DESC}) {
                  nodes {
                    slug
                    title
                    publishedDate
                    updatedDate
                    excerpt
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed - @zzzkan/gatsby-starter-blog",
            feed_url: "https://zzzkan-gatsby-starter-blog.netlify.app/rss.xml",
            site_url: "https://zzzkan-gatsby-starter-blog.netlify.app/",
          },
        ],
      },
    },
  ],
}

export default config
