import React from "react"

import Navbar from "./globals/navbar/Navbar"
import Footer from "./globals/footer/Footer"

import "../css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
