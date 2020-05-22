import React from "react"

import Title from "../Title"
import Carousel from "../Carousel"
import testimonials from "../../constants/testimonials"

import styles from "../../css/testimonials.module.css"

let settings = {
  dots: true,
  autoplay: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  initialSlide: 0,
}
const Testimonials = () => {
  return (
    <section className={`my-5 ${styles.testimonial}`}>
      <div className={`${styles.testimonialContainer} container`}>
        <Title
          title="Ce spun clientii nostri?"
          titleColor="title-white"
          separator="true"
        />
        <Carousel settings={settings}>
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={`${styles.testimonialContent} text-center`}
              >
                <p className={`${styles.text} font-weight-light font-italic`}>
                  {testimonial.text}
                </p>
                <p className={`${styles.name} text-white`}>
                  {testimonial.name}
                </p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
