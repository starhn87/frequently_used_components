import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Tab from "../component/Tab";

function TabDemo() {
  const [selected, setSelected] = useState(0);

  const onChange = (newSelected) => {
    setSelected(newSelected);
  };

  return (
    <Wrapper title="Tab">
      <Tab value={selected} onChange={onChange} tabColor="purple" />
    </Wrapper>
  );
}

export default TabDemo;
