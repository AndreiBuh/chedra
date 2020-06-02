import React from "react"

import { IconContext } from "react-icons"
import { FaSearch } from "react-icons/fa"

import styles from "./search.module.css"

const Search = () => {
  return (
    <div className={styles.subscribe}>
      <div>
        <input
          className={styles.input}
          type="text"
          name="search"
          placeholder="Caută"
          required
        />
      </div>
      <form className={styles.buttonWrapper}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <button className="btn btn-danger btn-lg px-2 px-sm-3">
            <IconContext.Provider
              value={{
                style: { verticalAlign: "middle" },
              }}
            >
              <FaSearch />
            </IconContext.Provider>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
