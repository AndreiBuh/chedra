import React, { useState, useEffect } from "react"

import Navbar from "./globals/navbar/Navbar"
import Footer from "./globals/footer/Footer"
import Spinner from "./globals/spinner/Spinner"

import "../css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  })
  return (
    <>
      {isLoading ? <Spinner /> : null}
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
