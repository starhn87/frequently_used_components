import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Tab from "../component/Tab";

function TabDemo() {
  const [selected, setSelected] = useState(0);
  const TAB_ITEMS = [
    {
      key: 0,
      title: "Tab 1",
      desc: "Tab Menu ONE",
    },
    {
      key: 1,
      title: "Tab 2",
      desc: "Tab Menu TWO",
    },
    {
      key: 2,
      title: "Tab 3",
      desc: "Tab Menu THREE",
    },
  ];

  const onChange = (key) => {
    setSelected(key);
  };

  return (
    <Wrapper title="Tab">
      <Tab
        value={selected}
        onChange={onChange}
        items={TAB_ITEMS}
        tabColor="purple"
      />
    </Wrapper>
  );
}

export default TabDemo;
