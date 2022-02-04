import React, { useState } from "react";
import Toggle from "../component/Toggle";

function ToggleDemo() {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (newChecked) => {
    setChecked(newChecked);
  };

  return (
    <Toggle
      defaultChecked={checked}
      onCheckedChange={onCheckedChange}
      color="blue"
      disabled={false}
      switchButtonColor="aliceblue"
    />
  );
}

export default ToggleDemo;
