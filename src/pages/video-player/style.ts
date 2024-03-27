import { styled } from "../../stitches.config";

export const Wrapper = styled("div", {
  backgroundColor: "$background",
  width: "100vw",
  height: "100vh",

  fontFamily: "Roboto",
});

export const HeaderContainer = styled("div",  {
  paddingLeft: '10%',
  width: "100vw",
  color: 'black',
  marginTop: "5rem",
})

export const MainContent = styled("main", {
  width: "80%",
  height: "80%",
  margin: "auto",
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