import React from "react"
import { Link, graphql, withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contra Wireframe Kit" />
      <Helmet>
        <script src={withPrefix('sound.js')} type="text/javascript" loop />
      </Helmet>
      <>
      <section className="hero_section">
        <audio id="contra_mp3" src="contra.mp3" preload="auto"/>
        <div className="container">
          <div className="hero_wrapper">
            <div className="hero_img">
              <img src="/bloo-cards-light.png" />
            </div>
            <div className="hero_details">
              <div className="texts">
                <img src="/bloo-logo.png" />
                <h1>low fidelity wireframe kit</h1>
                <p>All in one open source wireframe kit for quick design and prototyping your idea. Its library contains more than 250+ components supporting darkmode and 150+ ready to use mobile screens .</p>
              </div>

              <div className="compatible">
                <div className="p-logo"><img src="/figma.png"/> <img src="/sketch.png"/> <img src="xd.png"/></div>
              </div>

              <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <a href="#"><h4>coming soon</h4></a>
                  </button>

                </div>
                <a href="https://www.buymeacoffee.com/realvjy" className="btn btn-coffee">
                  <h4>Buy me a coffee</h4>
                </a>
              </div>
              <div className="license">
                <p>Free for commercial and personal use under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 License</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
