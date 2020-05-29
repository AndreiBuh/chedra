import React from "react"
import { Zoom } from "react-awesome-reveal"

import styles from "../css/hero-mask.module.css"

const HeroMask = () => {
  return (
    <div className={`${styles.mask} p-5 text-center`}>
      <Zoom cascade>
        <h2>
          Verifică la Registrul Auto Roman(RAR) dacă Inspecția Tehnică Periodică
          a mașinii tale este valabilă!
        </h2>
        <a
          href="http://prog.rarom.ro/rarpol/rarpol.asp"
          className="btn-white"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          Verifică
        </a>
      </Zoom>
    </div>
  )
}

export default HeroMask
