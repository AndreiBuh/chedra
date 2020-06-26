import React from "react"
import { Zoom, Fade } from "react-awesome-reveal"
import { IconContext } from "react-icons"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useStaticQuery, graphql } from "gatsby"

import { years, history } from "../../../constants/history"

import styles from "./progress.module.css"

const getHistory = graphql`
  {
    historyYears: allContentfulHistory(sort: { fields: year }) {
      nodes {
        id
        title
        year
        icon
        content {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
`

const Progress = () => {
  const { historyYears } = useStaticQuery(getHistory)
  return (
    <>
      <div className={styles.tabs}>
        <Tabs>
          <div className="row">
            <div className="col-sm-4">
              <TabList>
                {historyYears.nodes.map((item, index) => {
                  return (
                    <Tab>
                      {item.year} - {item.title}
                    </Tab>
                  )
                })}
              </TabList>
            </div>
            <div className="col-sm-8 mt-5">
              {historyYears.nodes.map((item, index) => {
                return (
                  <Zoom>
                    <TabPanel>
                      <h5>{item.title}</h5>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${item.content.childContentfulRichText.html}`,
                        }}
                      />
                    </TabPanel>
                  </Zoom>
                )
              })}
            </div>
          </div>
        </Tabs>
      </div>

      <ul className={`${styles.timeline} timeline mb-5`}>
        {historyYears.nodes.map((history, index) => {
          return (
            <li
              className={index % 2 === 0 ? "" : "timeline-inverted"}
              key={history.id}
            >
              <div className="timeline-badge rounded-circle">
                {/*  <IconContext.Provider
                  value={{
                    style: {
                      color: "white",
                      fontSize: "1.5rem",
                      verticalAlign: "middle",
                    },
                  }}
                >
                  {history.icon}
                </IconContext.Provider> */}
              </div>

              <div className="timeline-sep-title pt-2">{history.year}</div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title lines pl-5">{history.title}</h4>
                </div>
                <Fade cascade>
                  <div className="timeline-body">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${history.content.childContentfulRichText.html}`,
                      }}
                    />
                  </div>
                </Fade>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Progress
