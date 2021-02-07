import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="disclamer">
          <h2>Disclaimer</h2>
          <p>No designers were hurt in the creation of this wireframe kit. All styles and components were created for fun but are extremely useful for when you want to quickly turn your ideas to design and test with crazy folks. Any resemblance to a real product, available or unknown, is purely coincidental. You are free to design anything for personal or commercial purposes, with the help of this uikit.</p>
        </div>
        <div className="product">
          <h2>Other Products</h2>
          <div className="product-wrap">
            <div className="product-box">
              <a href="https://illlustrations.co/?ref=contra-uikit" target="__blank" className="p-box">
                <img src="/illlustrations.png" />
              </a>
            </div>
            <div className="product-box">
              <a href="https://uiprint.co/?ref=contra-uikit" target="__blank" className="p-box">
                <img src="/uiprint.png" />
              </a>
            </div>

            <div className="product-box">
              <a href="https://instagram.com/uihues?ref=contra-uikit" target="__blank" className="p-box">
                <img src="/uihues.png" />
              </a>
            </div>

            <div className="product-box">
              <a href="https://uilogos.co/?ref=contra-uikit" className="p-box"target="__blank" >
                <img src="/uilogos.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="yeah-credit">
        <div className="maker">
          <h3>Made with love &#10084; and coffee by <span><a href="https://vijayverma.co/?ref=contrauikit">vijay verma</a> @realvjy</span></h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/realvjy" target="__blank"><strong>dribbble</strong></a></li>
            <li> <a href="https://twitter.com/realvjy" target="__blank"><strong>twitter</strong></a></li>
            <li> <a href="https://instagram.com/realvjy" target="__blank"><strong>instagram</strong></a></li>
          </ul>
        </div>


        <div className="spl-credit">
          <p>Special Credit <span><a href="https://twitter.com/pablostanley" target="_blank">Pablo Stanley</a> • <a href="https://www.openpeeps.com/?ref=contrauikit" target="_blank">openpeeps</a></span></p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
