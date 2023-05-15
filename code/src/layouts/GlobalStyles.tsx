import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
	  box-sizing: border-box;
  }
    html {
    font-size: 16px;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      font-size: 12px;
    }
  }
  body {
    margin: 0;
	  padding: 0;
    color: ${(props) => props.theme.palette.text.primary}
  }
`;
