import React from "react"

import Progress from "../globals/progress/Progress"
import Title from "../Title"

const History = () => {
  return (
    <div>
      <Title
        title="Istoria"
        subtitle="noastră"
        titleColor="title-black"
        className="my-3 my-sm-5"
      />
      <Progress />
    </div>
  )
}

export default History
