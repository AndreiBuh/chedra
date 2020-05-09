import React from "react"
import { animateScroll as scroll } from "react-scroll"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IconContext } from "react-icons"
import { FaChevronUp } from "react-icons/fa"

import links from "../constants/links"
import socialIcons from "../constants/social-icons"

import styles from "../css/footer.module.css"

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
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Chedra Tax S.R.L. {new Date().getFullYear()} toate
        drepturile rezervate
      </div>
    </footer>
  )
}

export default Footer
