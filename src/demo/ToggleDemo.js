import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Toggle from "../component/Toggle";

function ToggleDemo() {
  const [value, setValue] = useState(false);

  const onValueChange = () => {
    return `Toggle Switch ${value ? "ON" : "OFF"}`;
  };

  return (
    <Wrapper title="Toggle">
      <Toggle
        value={value}
        onChange={setValue}
        onValueChange={onValueChange}
        color="blue"
        disabled={false}
        switchButtonColor="aliceblue"
      />
    </Wrapper>
  );
}

export default ToggleDemo;
