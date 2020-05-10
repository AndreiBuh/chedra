import React from "react"

import styled from "styled-components"

const Title = ({ title, subtitle, className, titleColor }) => {
  return (
    <div className={className}>
      <h4>
        <span className={titleColor}>{title} </span>
        <span>{subtitle}</span>
      </h4>
      <span className="title-separator"></span>
    </div>
  )
}

export default styled(Title)`
  font-size: 26px;
  line-height: 30px;
  margin-bottom: 1rem;
  h4 {
    text-align: center;
    letter-spacing: 2px;
    color: var(--primaryColor);
  }
  .title-black {
    color: var(--mainBlack);
  }

  .title-white {
    color: #fff;
  }
  .title-separator {
    display: block;
    height: 2px;
    position: relative;
    width: 45px;
    background-color: var(--primaryColor);
    margin: 0 auto;
  }
  @media (min-width: 576px) {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 2rem;
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
