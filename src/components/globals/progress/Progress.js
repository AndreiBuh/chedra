import React from "react"
import { Zoom } from "react-awesome-reveal"
import { IconContext } from "react-icons"
import { FaFlag, FaHome, FaCar, FaTools, FaCogs } from "react-icons/fa"
import { GiCarWheel } from "react-icons/gi"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import { years, history } from "../../../constants/history"

import styles from "./progress.module.css"

const Progress = () => {
  return (
    <>
      <div className={styles.tabs}>
        <Tabs>
          <div className="row">
            <div className="col-sm-4">
              <TabList>
                {years.map((item, index) => {
                  return <Tab>{item.year}</Tab>
                })}
              </TabList>
            </div>
            <div className="col-sm-8">
              {history.map((item, index) => {
                return (
                  <Zoom>
                    <TabPanel>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </TabPanel>
                  </Zoom>
                )
              })}
            </div>
          </div>
        </Tabs>
      </div>

      <ul className={`${styles.timeline} timeline mb-5`}>
        <li>
          <div className="timeline-badge rounded-circle">
            <IconContext.Provider
              value={{
                style: {
                  color: "white",
                  fontSize: "1.5rem",
                  verticalAlign: "middle",
                },
              }}
            >
              <FaFlag />
            </IconContext.Provider>
          </div>
          <div className="timeline-sep-title">2007</div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Infiintare Chedra Tax</h4>
            </div>
            <div className="timeline-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge rounded-circle">
            <IconContext.Provider
              value={{
                style: {
                  color: "white",
                  fontSize: "1.5rem",
                  verticalAlign: "middle",
                },
              }}
            >
              <FaHome />
            </IconContext.Provider>
          </div>
          <div className="timeline-sep-title">2010</div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Infiintare Chedra Tax Ciorani</h4>
            </div>
            <div className="timeline-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge rounded-circle">
            <IconContext.Provider
              value={{
                style: {
                  color: "white",
                  fontSize: "1.5rem",
                  verticalAlign: "middle",
                },
              }}
            >
              <FaCar />
            </IconContext.Provider>
          </div>
          <div className="timeline-sep-title">2013</div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Infiintare Chedra Tax Floresti</h4>
            </div>
            <div className="timeline-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge rounded-circle">
            <IconContext.Provider
              value={{
                style: {
                  color: "white",
                  fontSize: "1.5rem",
                  verticalAlign: "middle",
                },
              }}
            >
              <FaTools />
            </IconContext.Provider>
          </div>
          <div className="timeline-sep-title">2018</div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Starting the Business</h4>
            </div>
            <div className="timeline-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-rand-23">
          <div className="timeline-badge rounded-circle">
            <IconContext.Provider
              value={{
                style: {
                  color: "white",
                  fontSize: "1.5rem",
                  verticalAlign: "middle",
                },
              }}
            >
              <GiCarWheel />
            </IconContext.Provider>
          </div>
          <div className="timeline-sep-title">2019</div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Vulcanizare</h4>
            </div>
            <div className="timeline-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted ">
          <div className="timeline-badge rounded-circle">
            <IconContext.Provider
              value={{
                style: {
                  color: "white",
                  fontSize: "1.5rem",
                  verticalAlign: "middle",
                },
              }}
            >
              <FaCogs />
            </IconContext.Provider>
          </div>
          <div className="timeline-sep-title">2020</div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Prezent</h4>
            </div>
            <div className="timeline-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Progress
