import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Toggle from "../component/Toggle";

function ToggleDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Wrapper title="Toggle">
      <Toggle
        value={checked}
        onChange={setChecked}
        color="blue"
        disabled={false}
        switchButtonColor="aliceblue"
      />
    </Wrapper>
  );
}

export default ToggleDemo;
