import { styled } from "../../stitches.config";

export const Wrapper = styled("div", {
  backgroundColor: "#13475B",
  width: "100%",
  height: "100vh",
  fontFamily: "Roboto",
});

export const PageHeaderContainer = styled("div", {
  width: "100%",
  boxSizing: "border-box",
  color: "#FFFFFF",
  paddingLeft: "10%",
  paddingBottom: 5,
  paddingTop: 5,
});

export const MainContent = styled("main", {
  width: "80%",
  height: 600,
  margin: "auto",
  display: "flex",
  background: "#020202",
  borderRadius: "0.25rem",
});

export const VideoClass = styled("div", {
  display: "flex",
  justifyContent: " center",
  alignItems: "center",
  width: "75%",
  height: "100%",
  color: "white",
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
  background: "rgb(11, 47, 61)",
});

export const SkeletonContainer = styled("div", {
  justifyContent: "space-around",
  alignItems: "center",
  gap: "1rem",
  border: "1px solid #506266",
  display: "flex",
  padding: "1rem",
  margin: "0.5rem",
  borderRadius: "0.3rem",
});

export const SkeletonContent = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyItems: "space-between",
});
