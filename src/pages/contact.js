import React from "react"
import { Zoom } from "react-awesome-reveal"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Form from "../components/globals/form/Form"
import Title from "../components/Title"
import Comb from "../components/globals/comb/Comb"

import contactPloiesti from "../constants/contact-ploiesti"
import contactCiorani from "../constants/contact-ciorani"
import contactFloresti from "../constants/contact-floresti"

import styles from "../css/contact.module.css"

const contact = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const customCrumbLabel = location.pathname.replace("/", "")
  return (
    <Layout>
      <SEO title="Contact" description="Chedra Tax ITP contact" />
      <Breadcrumb
        crumbs={crumbs}
        crumbLabel={customCrumbLabel}
        crumbSeparator=" > "
      />
      <section>
        <article>
          <div className="container p-5">
            <Title
              title="Contact ITP"
              subtitle="Ploiesti"
              titleColor="title-black"
            />

            <div className="row">
              <div className="col-sm-6 row p-2 p-sm-5 mx-auto">
                {contactPloiesti.map((item, index) => {
                  return (
                    <div className="col-sm-6 text-center">
                      <Zoom cascade>
                        <>
                          <Comb>
                            <img
                              src={item.icon}
                              className={styles.svgImage}
                              alt={item.title}
                            />
                          </Comb>
                        </>
                      </Zoom>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  )
                })}
              </div>
              <div className="col-sm-6 p-0 p-sm-5 col-sm-push-6">
                <Form className="bg-light p-3" rows="10" />
              </div>
            </div>
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
                title="Harta Ploiesti"
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
            <div className="row">
              <div className="col-sm-6 p-0 p-sm-5 order-last order-sm-first">
                <Form className="bg-light p-3" rows="10" />
              </div>
              <div className="col-sm-6 row p-2 p-sm-5 mx-auto order-first order-sm-last">
                {contactCiorani.map((item, index) => {
                  return (
                    <div className="col-sm-6 text-center">
                      <Zoom cascade>
                        <>
                          <Comb>
                            <img
                              src={item.icon}
                              className={styles.svgImage}
                              alt={item.title}
                            />
                          </Comb>
                        </>
                      </Zoom>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
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
                title="Harta Ciorani"
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
            <div className="row">
              <div className="col-sm-6 row p-2 p-sm-5 mx-auto">
                {contactFloresti.map((item, index) => {
                  return (
                    <div className="col-sm-6 text-center">
                      <Zoom cascade>
                        <>
                          <Comb>
                            <img
                              src={item.icon}
                              className={styles.svgImage}
                              alt={item.title}
                            />
                          </Comb>
                        </>
                      </Zoom>
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
                title="Harta Floresti"
              ></iframe>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default contact
