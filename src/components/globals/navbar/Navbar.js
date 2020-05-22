import React, { useState } from "react"
import { IconContext } from "react-icons"
import {
  FaAlignRight,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import socialIcons from "../../../constants/social-icons"

import links from "../../../constants/links"
import logo from "../../../images/logo.png"
import phone from "../../../images/header-phone.png"
import timer from "../../../images/header-timer.png"

import styles from "./navbar.module.css"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(dropdownOpen => !dropdownOpen)
  }

  return (
    <>
      <div className={styles.navCenter} id="navbar">
        <AniLink fade to="/">
          <div className={styles.logoHeader}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className="text-center">
              <h1 className={`mb-0 ${styles.logoTitle}`}>
                Chedra<span style={{ color: "var(--primaryColor)" }}>Tax</span>
              </h1>
              <span className={styles.logoDescription}>
                Pentru siguranta masinii tale
              </span>
            </div>
          </div>
        </AniLink>
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
                <AniLink fade to={link.path} activeClassName={styles.active}>
                  {link.text}
                </AniLink>
                <ul className={styles.dropdown}>
                  {link.dropdown &&
                    link.dropdown.map(item => (
                      <li key={index}>
                        <AniLink fade to={item.path}>
                          {item.text}
                        </AniLink>
                      </li>
                    ))}
                </ul>
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
              <FaAlignRight onClick={() => setIsOpen(true)} />
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
              <>
                <li key={index} className={styles.navItem}>
                  <div className={styles.navSpan}>
                    <div>
                      <AniLink fade to={link.path} className={styles.navLink}>
                        {link.text}
                      </AniLink>
                    </div>
                    <div onClick={toggleDropdown}>
                      <IconContext.Provider
                        value={{
                          style: {
                            color: "white",
                            fontSize: "1rem",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {link.dropdown && (
                          <div>
                            {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                        )}
                      </IconContext.Provider>
                    </div>
                  </div>
                </li>
                <ul
                  className={
                    dropdownOpen
                      ? `${styles.subMenu} ${styles.showSubMenu}`
                      : `${styles.subMenu}`
                  }
                >
                  {dropdownOpen &&
                    link.dropdown &&
                    link.dropdown.map(item => (
                      <li key={index} className={styles.navSubItem}>
                        <AniLink
                          fade
                          to={item.path}
                          className={styles.navSubLink}
                        >
                          {item.text}
                        </AniLink>
                      </li>
                    ))}
                </ul>
              </>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Navbar
