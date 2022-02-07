import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import Toggle from "../component/Toggle";

const Explain = styled.div`
  padding-top: 20px;
`;

function ToggleDemo() {
  const [value, setValue] = useState(false);

  return (
    <Wrapper title="Toggle">
      <Toggle
        value={value}
        onChange={setValue}
        color="blue"
        disabled={false}
        switchButtonColor="aliceblue"
      />
      <Explain>{`Toggle Switch ${value ? "ON" : "OFF"}`}</Explain>
    </Wrapper>
  );
}

export default ToggleDemo;
