import { Theme } from "@mui/material";

declare module "@mui/material/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
declare module "@mui/material/styles" {
  interface Theme {
    radius?: number; // optional
    paper?: {
      radius?: number;
    };
    tableHeader?: React.CSSProperties | undefined | any;
    dtPaper?: React.CSSProperties | undefined;
    size?: {
      avatarIcon?: string;
      emptyChartIcon?: string;
      emptyChartFPIcon?: string;
      buttonIcon?: string;
      chartHeight?: string;
    };
    boxShadow?: string;
    paperShadow?: string;
    iconSize?: string;
  }

  interface ThemeOptions {
    radius?: number; // optional
    paper?: {
      radius?: number;
    };
    tableHeader?: React.CSSProperties | undefined | any;
    dtPaper?: React.CSSProperties | undefined;
    size?: {
      avatarIcon?: string;
      emptyChartIcon?: string;
      emptyChartFPIcon?: string;
      buttonIcon?: string;
      chartHeight?: string;
    };
    boxShadow?: string;
    paperShadow?: string;
    iconSize?: string;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    primaryLighter?: string;
    black?: string;
    white?: string;
    icon?: string;
    cardTitle?: string;
    chartTitle?: string;
    highlighter?: string;
    money?: string;
    stepperDefault?: string;
    rowHighlight?: string;
  }
  interface PaletteOptions {
    primaryLighter?: string;
    black?: string;
    white?: string;
    icon?: string;
    cardTitle?: string;
    chartTitle?: string;
    highlighter?: string;
    money?: string;
    stepperDefault?: string;
    rowHighlight?: string;
  }
}
