import React, { useState } from "react";
import Tab from "../component/Tab";

function TabDemo() {
  const [selected, setSelected] = useState(0);

  const onSelectedChange = (newSelected) => {
    setSelected(newSelected);
  };

  return (
    <Tab
      defaultTab={selected}
      onSelectedChange={onSelectedChange}
      tabColor="purple"
    />
  );
}

export default TabDemo;
