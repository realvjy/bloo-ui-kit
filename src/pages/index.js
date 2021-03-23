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
      <div className="nav">
        <div className="container">
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
        </div>
      </div>
      <section className="hero_section">
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

              <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDOgz-4-5e_XKfa5Nrbt06KNCQFFuNOa39_W2jvcsp7CjKRQ/viewform"><h4>Early access</h4></a>
                  </button>

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
                  <h4>Predefined <br/>Screens</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>20+</h2>
                  <h4>Flowchart <br/>Example</h4>
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
