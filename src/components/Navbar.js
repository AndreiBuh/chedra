import React, { useState } from "react"
import { IconContext } from "react-icons"
import { FaBars, FaTimes, FaPlus } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialIcons from "../constants/social-icons"

import links from "../constants/links"
import logo from "../images/chedra5.png"
import phone from "../images/header-phone.png"
import timer from "../images/header-timer.png"

import styles from "../css/navbar.module.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.navCenter} id="navbar">
        <div className={styles.logoHeader}>
          <AniLink fade to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </AniLink>
        </div>
        <div className={styles.headerDetails}>
          <div className={styles.phoneHeader}>
            <img src={phone} alt="phone" />
            <div className={styles.phoneHeaderDetails}>
              <span className={styles.navbarSpan}>
                <strong>Telefon</strong>
              </span>
              <a href="tel:0754-689-944">
                <span className={styles.navbarSpan}>0754-689-944</span>
              </a>
            </div>
          </div>
          <div className={styles.timerHeader}>
            <img src={timer} alt="timer" />
            <div className={styles.timerHeaderDetails}>
              <span className={styles.navbarSpan}>
                <strong>Program</strong>
              </span>
              <span className={styles.navbarSpan}>
                Luni - Sambata 9.00 - 19.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navHeader}>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <AniLink fade to={link.path}>
                  {link.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
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
        <div className={styles.menuToggle}>
          <IconContext.Provider
            value={{
              style: {
                color: "white",
                verticalAlign: "middle",
                fontSize: "2rem",
              },
            }}
          >
            <div>
              <FaBars onClick={() => setIsOpen(true)} />
            </div>
          </IconContext.Provider>
        </div>

        <ul
          className={
            isOpen ? `${styles.navList} ${styles.showNav}` : `${styles.navList}`
          }
        >
          <IconContext.Provider
            value={{
              style: {
                color: "white",
                verticalAlign: "middle",
                fontSize: "2rem",
                float: "right",
                cursor: "pointer",
              },
            }}
          >
            <div>
              <FaTimes onClick={() => setIsOpen(!isOpen)} />
            </div>
          </IconContext.Provider>
          {links.map((link, index) => {
            return (
              <li key={index} className={styles.navItem}>
                <div className={styles.navSpan}>
                  <div>
                    <AniLink fade to={link.path} className={styles.navLink}>
                      {link.text}
                    </AniLink>
                  </div>
                  <div>
                    <IconContext.Provider
                      value={{
                        style: {
                          color: "var(--primaryColor)",
                          fontSize: "1rem",
                        },
                      }}
                    >
                      <div>
                        <FaPlus />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Navbar
