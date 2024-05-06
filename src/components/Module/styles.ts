import { styled } from "../../stitches.config";
import * as Collapsible from "@radix-ui/react-collapsible";

export const ModuleContainer = styled(Collapsible.Root, {
  background: "rgb(19, 71, 91)",
  color: "#D7D7D9",
  border: "1px solid #506266",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  margin: "0.5rem",
  borderRadius: "0.3rem",
});

export const StyledIndex = styled("div", {
  borderRadius: "50%",
  fontSize: "30px",
  fontWeight: "700",
  width: "2.7rem",
  height: "2.7rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: "#D7D7D9",
  background: "#506266",
});

export const StyledDesc = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyItems: "space-between",
  h2: {
    fontSize: "1rem",
    margin: "0 0 3px 0",
  },
  span: {
    fontSize: "0.75rem",
  },
  color: "#D7D7D9",
});

export const ModuleDesc = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "1rem",
  "&.icon-caret": {
    transition: "transform 0.3s", // Adicione uma transição para suavizar a rotação
  },
});

export const StyledTrigger = styled(Collapsible.Trigger, {
  border: "none",
  background: "none",
  cursor: "pointer",
});
