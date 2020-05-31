import React from "react"

import styles from "./form.module.css"

const Form = ({ className, rows }) => {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className={`${className} form-control`}
          name="nume"
          placeholder="Nume"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className={`${className} form-control`}
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <textarea
          className={`${className} form-control`}
          rows={rows}
          name="mesaj"
          placeholder="Mesaj"
        ></textarea>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <button className="btn btn-danger btn-lg px-5">Trimite</button>
      </div>
    </form>
  )
}

export default Form
