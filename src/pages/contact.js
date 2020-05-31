import React from "react"
import { Zoom } from "react-awesome-reveal"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Form from "../components/globals/form/Form"
import Title from "../components/Title"
import Comb from "../components/globals/comb/Comb"

import contactPloiesti from "../constants/contact-ploiesti"
import contactCiorani from "../constants/contact-ciorani"
import contactFloresti from "../constants/contact-floresti"

import styles from "../css/contact.module.css"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Chedra Tax ITP contact" />
      <section>
        <article>
          <div className="container p-5">
            <Title
              title="Contact ITP"
              subtitle="Ploiesti"
              titleColor="title-black"
            />
            <Zoom cascade>
              <div className="row">
                <div className="col-sm-6 row p-2 p-sm-5">
                  {contactPloiesti.map((item, index) => {
                    return (
                      <div className="col-sm-6 text-center">
                        <Comb>
                          <img
                            src={item.icon}
                            className={styles.svgImage}
                            alt={item.title}
                          />
                        </Comb>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="col-sm-6 p-0 p-sm-5">
                  <Form className="bg-light p-3" rows="10" />
                </div>
              </div>
            </Zoom>
          </div>
          <div className={styles.mapRouter}>
            <div className={styles.gmap}>
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=strada%20rudului&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </article>
        <hr className="my-2 my-sm-5 container" />
        <article>
          <div className="container p-5">
            <Title
              title="Contact ITP"
              subtitle="Ciorani"
              titleColor="title-black"
            />
            <Zoom cascade>
              <div className="row">
                <div className="col-sm-6 p-0 p-sm-5">
                  <Form className="bg-light p-3" rows="10" />
                </div>
                <div className="col-sm-6 row p-2 p-sm-5">
                  {contactCiorani.map((item, index) => {
                    return (
                      <div className="col-sm-6 text-center">
                        <Comb>
                          <img
                            src={item.icon}
                            className={styles.svgImage}
                            alt={item.title}
                          />
                        </Comb>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Zoom>
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=SAT%20FLORESTI%2C%20COM.%20FLORESTI%2C%20STR.%20PRINCIPALA%20NR%3A%2017%20A&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </article>
        <hr className="my-2 my-sm-5 container" />
        <article>
          <div className="container p-5">
            <Title
              title="Contact ITP"
              subtitle="Floresti"
              titleColor="title-black"
            />
            <Zoom cascade>
              <div className="row">
                <div className="col-sm-6 row p-2 p-sm-5">
                  {contactFloresti.map((item, index) => {
                    return (
                      <div className="col-sm-6 text-center">
                        <Comb>
                          <img
                            src={item.icon}
                            className={styles.svgImage}
                            alt={item.title}
                          />
                        </Comb>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    )
                  })}
                </div>
                <div className="col-sm-6 p-0 p-sm-5">
                  <Form className="bg-light p-3" rows="10" />
                </div>
              </div>
            </Zoom>
          </div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=primaria%20ciorani&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default contact
