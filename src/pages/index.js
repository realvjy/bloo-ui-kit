import React from "react"
import { Link, graphql, withPrefix } from "gatsby"
import Helmet from "react-helmet"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Bloo Low Fidelity Wireframe Kit" />
      <Helmet>
        <script src={withPrefix('sound.js')} type="text/javascript" loop />
      </Helmet>
      <>
      
      <div className="top-nav">
        <div className="container">
          <div className="nav-box">
              <ThemeToggler>
                    {({ theme, toggleTheme }) => (
                      <div className="mode-toggle">
                      <label>
                        <input
                          type="checkbox"
                          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                          checked={theme === 'dark'}
                          id="dmode"
                        />{' '}
                      </label>
                      </div>
                    )}
              </ThemeToggler>
              <ul className="buttons links">
                <li>
                  <a className="btn-social" href="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290589&theme=light"><img src="/ph-badge.png" /></a>
                </li>
                <li>
                  <a className="btn-social" href="https://twitter.com/intent/tweet?text=Design%20awesome%20wireframes%20with%20Bloo%20Lo-fi%20Wireframe%20Kit%20https%3A%2F%2Fbloouikit.com%20by%20%40realvjy%20"><img src="/twitter-share.png" /></a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <section className="hero_section">

        <div className="container">
          <div className="hero_wrapper">
            <div className="hero_img">
            <picture>
              <source srcset="dark.png" media="(prefers-color-scheme: dark)" />
              <source srcset="light.png" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
              <img id="screenshot" src="light.png" />
            </picture>
            </div>
            <div className="hero_details">
              <div className="texts">
                <img src="/bloo-logo.png" />
                <h1>low fidelity wireframe kit</h1>
                <p>All in one open source wireframe kit for quick design and prototyping your idea. Its library contains more than 250+ components supporting darkmode and 150+ ready to use mobile screens .</p>
              </div>

              <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <h4>Download now</h4>
                  </button>
                  <ul className="dwn-list">
                    <li><a href="http://bit.ly/bloouikit-figma"><img src="/figma.png"/> Figma</a></li>
                    <li><a href="http://bit.ly/bloouikit-sketch"><img src="/sketch.png"/> Sketch</a></li>
                    <li><a href="http://bit.ly/bloouikit-XD"><img src="/xd.png"/> Adobe XD</a></li>
                  </ul>
                </div>
                <a href="https://www.buymeacoffee.com/realvjy" className="btn btn-coffee">
                  <h4>Buy me a coffee</h4>
                </a>
              </div>
              <div className="license-box">
                <div className="compatible">
                  <div className="p-logo"><img src="/figma.png"/> <img src="/sketch.png"/> <img src="xd.png"/></div>
                </div>
                <div className="license">
                  <p>Free for commercial and personal use under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 License</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features_section">
        <div className="container">
          <div className="feature_box">
            <div className="f_box">
                <div className="box_wrap">
                  <h2>250+</h2>
                  <h4>Predefined Components</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>150+</h2>
                  <h4><br/>Screen Templates</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>10+</h2>
                  <h4>Flowchart <br/>& Arrow Example</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>FREE</h2>
                  <h4>Open source CC0 License</h4>
                </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
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
