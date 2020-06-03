import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import styles from "./progress.module.css"

const Progress = () => {
  return (
    <Tabs>
      <div className="row">
        <div className="col-sm-4">
          <TabList>
            <Tab>2007 - Infiintare Chedra Tax Ploiesti</Tab>
            <Tab>2009 - Deschidere ITP Ciorani</Tab>
            <Tab>2011 - Infiintare Chedra Tax Floresti</Tab>
            <Tab>2015 - Vulcanizare</Tab>
            <Tab>2020 - Toate bune si frumoase</Tab>
          </TabList>
        </div>
        <div className="col-sm-5">
          <TabPanel>
            <h3>WE ARE STARTED AT CALIFORNIA - 1984</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              points of using Lorem Ipsum is that seds uts it has more-or-less
              normal distribution of letters embarrassing generators fact that a
              reader will be distracted by the readable content of a page when
              looking.
            </p>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  )
}

export default Progress
