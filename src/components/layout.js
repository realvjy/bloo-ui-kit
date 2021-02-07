import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header = (
      <>
      <div className="announce-wrapper ph">

      </div>

      </>
    )
  return (
    <div className="contra_wrap">
        <main className="hero_section">{children}</main>

      </div>
  )
}

export default Layout
