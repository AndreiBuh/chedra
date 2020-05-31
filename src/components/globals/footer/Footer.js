import React from "react"
import { animateScroll as scroll } from "react-scroll"
import { IconContext } from "react-icons"
import { FaChevronUp, FaCheckCircle } from "react-icons/fa"

import Form from "../form/Form"

import contact from "../../../constants/contact"
import servicii from "../../../constants/servicii"
import faq from "../../../constants/faq"
import socialIcons from "../../../constants/social-icons"

import styles from "./footer.module.css"

const scrollToTop = () => {
  scroll.scrollToTop()
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop}>
        <a
          href="javascript:void(0)"
          onClick={scrollToTop}
          style={{ color: "white", fontSize: "1.7rem" }}
        >
          <IconContext.Provider value={{ style: { verticalAlign: "bottom" } }}>
            <div style={{ padding: "10px" }}>
              <FaChevronUp />
            </div>
          </IconContext.Provider>
        </a>
      </div>
      <div className="py-4 p-sm-5">
        <div className="container">
          <div className="row text-left">
            <div className="col-sm-3">
              <h3 className={`my-3 ${styles.footerTitle}`}>Contact</h3>
              {contact.map((item, index) => {
                return (
                  <p className={styles.footerParagraph} key={index}>
                    {item.title}:{" "}
                    <span style={{ color: "var(--primaryColor)" }}>
                      {item.text}
                    </span>
                  </p>
                )
              })}
            </div>
            <div className="col-sm-3">
              <h3 className={`my-3 ${styles.footerTitle}`}>Servicii</h3>
              {servicii.map((item, index) => {
                return (
                  <p className={styles.footerParagraph} key={index}>
                    <IconContext.Provider
                      value={{ style: { verticalAlign: "middle" } }}
                    >
                      <FaCheckCircle style={{ color: "var(--primaryColor)" }} />
                    </IconContext.Provider>

                    <span className="mx-2">{item.content}</span>
                  </p>
                )
              })}
            </div>
            <div className="col-sm-3">
              <h3 className={`my-3 ${styles.footerTitle}`}>Suport</h3>
              {faq.map((item, index) => {
                return (
                  <p className={styles.footerParagraph} key={index}>
                    <IconContext.Provider
                      value={{ style: { verticalAlign: "middle" } }}
                    >
                      <FaCheckCircle style={{ color: "var(--primaryColor)" }} />
                    </IconContext.Provider>
                    <span className="mx-2">{item.text}</span>
                  </p>
                )
              })}
            </div>
            <div className="col-sm-3">
              <h3 className={`my-3 ${styles.footerTitle}`}>Mesaj</h3>
              <Form rows="5" />
            </div>
          </div>
        </div>
      </div>

      <div className={`p-2 p-sm-3 ${styles.footerBottom}`}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles.copyright} col-md-7 align-self-center p-2`}
            >
              Copyright &copy; Chedra Tax {new Date().getFullYear()} | Toate
              drepturile rezervate
            </div>
            <div className={`col-md-5 text-sm-right ${styles.navSocialLinks}`}>
              {socialIcons.map((item, index) => {
                return (
                  <a
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconContext.Provider
                      value={{ style: { verticalAlign: "middle" } }}
                    >
                      {item.icon}
                    </IconContext.Provider>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
