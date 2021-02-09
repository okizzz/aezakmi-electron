import { createGlobalStyle } from "styled-components";

interface IColors {
  default: string;
  yellow: string;
  orange: string;
  green: string;
  red: string;

  darkBlue: string;
  navyBlue: string;
  lightBlue: string;

  defaultGray: string;
  lightGray: string;
}
interface IFontSize {
  title: string;
  lg: string;
  md: string;
  sm: string;
}

interface IBorder {
  default: string;
  hover: string;
}
export interface ITheme {
  colors: IColors;
  fontSizes: IFontSize;
  border: IBorder;
  backgroundColor: string;
}

export type ThemeType = "light" | "dark";

export const lightTheme: ITheme = {
  colors: {
    default: "#31353D",
    yellow: "#F9DE53",
    orange: "#FEC73C",
    green: "#59BD50",
    red: "#FD8567",

    darkBlue: "#7B8AA8",
    navyBlue: "#8B99B2",
    lightBlue: "#E7E9F0",

    defaultGray: "rgba(49, 53, 61, 0.4);",
    lightGray: "#E5E5E5",
  },
  border: {
    default: "#E7E9F0",
    hover: "#7B8AA8",
  },
  fontSizes: {
    title: "22px",
    lg: "16px",
    md: "14px",
    sm: "12px",
  },
  backgroundColor: "#FFF",
} as const;

export const darkTheme: ITheme = {
  colors: {
    default: "#FFF",
    yellow: "#F9DE53",
    orange: "#FEC73C",
    green: "#59BD50",
    red: "#FD8567",

    darkBlue: "#7B8AA8",
    navyBlue: "#8B99B2",
    lightBlue: "#E7E9F0",

    defaultGray: "rgba(49, 53, 61, 0.4);",
    lightGray: "#E5E5E5",
  },
  border: {
    default: "#7B8AA8",
    hover: "#FFFFFF",
  },
  fontSizes: {
    title: "22px",
    lg: "16px",
    md: "14px",
    sm: "12px",
  },
  backgroundColor: "#31353D",
} as const;

export const GlobalStyle = createGlobalStyle<any>`
body {
  margin: 0;
  padding: 0;
  background-color: ${(data) => data.theme.backgroundColor};
  color: ${(data) => data.theme.colors.default};
  font-family: "Open Sanns", sans-serif;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
  
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }
  
  h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  
  h4 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  
  p {
    margin: 0;
  }
  
  .popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(196, 196, 196, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
  }
  
  .popup-container .popup {
    width: 280px;
    border-radius: 24px;
    border: 1px solid #e5e5e5;
    box-shadow: 0px 4px 8px rgba(37, 51, 75, 0.08);
    padding: 30px 40px 23px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .popup-container .popup .close {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .popup-container .popup h2 {
    margin-top: 21px;
    margin-bottom: 24px;
  }
  
  .popup-container .popup .input,
  .popup-container .popup .input-dropdown {
    margin-bottom: 23px;
    width: 100%;
  }
}
`;
