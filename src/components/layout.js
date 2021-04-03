import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header = (
      <>
      

      </>
    )
  return (
    <div className="contra_wrap">
        <main className="main">{children}</main>
    </div>
  )
}

export default Layout
