import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ image, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={image} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "50vh" : "30vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(201, 39, 37, 0.5), rgba(0, 0, 0, 0.5))"
      : "none"};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    min-height: ${props => (props.home ? "70vh" : "40vh")};
  }
`
