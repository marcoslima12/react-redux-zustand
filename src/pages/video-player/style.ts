/* import { styled } from "../../stitches.config"; */
import { styled, css, globalCss, keyframes } from "@stitches/react";

export const Wrapper = styled("div", {
  backgroundColor: "$background",
  width: "100vw",
  height: "100vh",

  fontFamily: "Roboto",
});

export const MainContent = styled("main", {
  width: "80%",
  height: "80%",
  margin: "auto",
  marginTop: "5rem",
  display: "flex",

  background: "#020202",

  borderRadius: "0.25rem",
});

export const VideoClass = styled("div", {
  width: "75%",
});

export const ModuleTitle = styled("h2", {
  color: "$text",
});

export const ClassTitle = styled("h3", {
  color: "$text",
});

export const Button = styled("button", {
  color: "$text",
});

export const Modules = styled("aside", {
  width: "25%",
  height: "100%",
  overflowY: "scroll",
});

export const LargeText = css({
  fontSize: '50px',
  color: 'red'
})

const moveRight = keyframes({
  'from': {
    transform: 'scale(1)'
  },
  'to': {
    transform: 'scale(1.5)'
  }
});

export const ButtonStitchesComponent = styled('button', {
  backgroundColor: 'AliceBlue',
  width: '100px',
  height: '100px',
  fontSize: '25px',
  color: 'pink',
  '&:hover': {
    cursor: 'pointer',
    background: 'yellow',
    animation: `${moveRight} 500ms`
  },
  transition: 'background 0.25s'
});



export const globalStyles = globalCss({
 body: {
  background: 'red',
  color: 'white'
 }
})
