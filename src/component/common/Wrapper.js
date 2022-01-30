import { Box, Container, Title } from "./GlobalStyles";

function Wrapper({ title, children }) {
  return (
    <Box>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </Box>
  );
}

export default Wrapper;
