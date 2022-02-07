import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    * {
        box-sizing: border-box;
    }

    ::placeholder {
      color: #bbbcbb;
    }
`;
