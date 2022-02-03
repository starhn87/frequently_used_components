import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 30px 30px 40px;
`;

const Title = styled.div`
  padding-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  padding: 80px;
  text-align: center;
`;

function Wrapper({ title, children }) {
  return (
    <Box>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </Box>
  );
}

export default Wrapper;
