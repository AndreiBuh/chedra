import React from "react"

import Comb from "../comb/Comb"

import newsletter from "../../../images/newsletter.svg"
import styles from "./newsletter.module.css"

const Newsletter = () => {
  return (
    <section className={`${styles.section} px-2 py-5 p-sm-5`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Comb background="var(--mainWhite)">
              <img src={newsletter} className="svg-image" />
            </Comb>
          </div>
          <div className="col-sm-6 pt-3">
            <h5 className={`${styles.title} text-center`}>
              Află primul cele mai noi oferte
            </h5>
            <div className={styles.subscribe}>
              <div>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <form
                className={styles.buttonWrapper}
                action="https://formspree.io/FORM_ID"
                method="POST"
              >
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <button className="btn btn-danger btn-lg px-2 px-sm-5">
                    Abonare
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
