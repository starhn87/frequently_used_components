import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import Toggle from "../component/Toggle";

const Explain = styled.div`
  padding-top: 20px;
`;

function ToggleDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper title="Toggle">
      <Toggle checked={checked} onClick={setChecked} disabled={false} />
      <Explain>{`Toggle Switch ${checked ? "ON" : "OFF"}`}</Explain>
    </Wrapper>
  );
}

export default ToggleDemo;
