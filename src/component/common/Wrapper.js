import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const Box = styled.div`
  padding: 30px 30px 40px;

  @media only screen and (max-width: 700px) {
    padding: 30px 20px;
  }
`;

const Title = styled.div`
  padding-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

const Container = styled.div`
  padding: 80px;
  text-align: center;

  @media only screen and (max-width: 700px) {
    padding: 0;
  }
`;

function Wrapper({ title, children }) {
  return (
    <Box>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </Box>
  );
}

Wrapper.propTypes = {
  title: PropType.string.isRequired,
  children: PropType.node.isRequired,
};

export default Wrapper;
