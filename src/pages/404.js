import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"

import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Ai gresit pagina">
          <Link to="/" className="btn-white">
            Intoarce-te la pagina principala
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
