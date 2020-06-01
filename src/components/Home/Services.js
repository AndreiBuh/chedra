import React from "react"
import { Zoom } from "react-awesome-reveal"

import Title from "../Title"
import Comb from "../globals/comb/Comb"
import services from "../../constants/services"

import styles from "../../css/services.module.css"

const Services = () => {
  return (
    <section className="container p-5">
      <Title title="Serviciile" subtitle="noastre" titleColor="title-black" />
      <div className="row">
        {services.map((item, index) => {
          return (
            <div className="col-sm-4 text-center" key={index}>
              <Zoom cascade>
                <>
                  <Comb>
                    <img
                      src={item.icon}
                      className="svg-image"
                      alt={item.title}
                    />
                  </Comb>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </>
              </Zoom>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
