import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import Tab from "../component/Tab";

const Desc = styled.p`
  padding-top: 80px;

  @media only screen and (max-width: 700px) {
    padding-top: 50px;
  }
`;

function TabDemo() {
  const [selectedTab, setSelectedTab] = useState(0);
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

  return (
    <Wrapper title="Tab">
      <Tab
        selectedTab={selectedTab}
        onChange={(key) => setSelectedTab(key)}
        items={TAB_ITEMS}
      />
      <Desc>{TAB_ITEMS[selectedTab].desc}</Desc>
    </Wrapper>
  );
}

export default TabDemo;
