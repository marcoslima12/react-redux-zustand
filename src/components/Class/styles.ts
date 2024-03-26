import { styled } from "../../stitches.config";

export const ClassName = styled("div", {
  fontSize: "0.875rem",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  marginRight: 'auto'
});

export const ClassContainer = styled("div", {
  display: "flex",
  justifyContent: "space-evelyn",
  alignItems: "center",
  gap: "1rem",
  maxHeight: "2rem",
  width: "inhereit",

  color: "#D7D7D9",
  padding: "0.5rem",
  '&[data-state=open]': {
    border: '2px solid green',
  },
  cursor: 'pointer'
});
