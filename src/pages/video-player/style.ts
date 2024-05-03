import { styled } from "../../stitches.config";

export const Wrapper = styled("div", {
  backgroundColor: "#13475B",
  width: "100%",
  height: "100vh",
  fontFamily: "Roboto",
});

export const PageHeaderContainer = styled("div",  {
  paddingLeft: '10%',
  width: "100%",
  boxSizing: 'border-box',
  color: '#FFFFFF',
  paddingBottom: 10
})

export const MainContent = styled("main", {
  width: "80%",
  height: 600,
  margin: "auto",
  display: "flex",
  background: "#020202",
  borderRadius: "0.25rem",
});

export const VideoClass = styled("div", {
  width: "75%",
  height: '100%',
  color: 'white'
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