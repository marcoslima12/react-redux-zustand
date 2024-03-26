import { createStitches } from "@stitches/react";
import { lightTheme } from "./style/theme";

export const { styled, createTheme, theme } = createStitches({
  theme: lightTheme,
});