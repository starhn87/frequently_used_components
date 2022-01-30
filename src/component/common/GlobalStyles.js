import styled, { createGlobalStyle } from "styled-components";
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

`;

export const Box = styled.div`
  padding: 30px 30px 100px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const Container = styled.div`
  text-align: center;
  padding: 80px;
`;
