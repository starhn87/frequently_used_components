import React, { useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

const TABS_ITEMS = [
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

const TabContrainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;

const TabValue = styled.button`
  padding: 10px 0;
  flex-grow: 1;
  color: black;
  border-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  &.selected {
    background-color: ${(props) => props.tabColor};
    color: white;
  }
`;

const Desc = styled.p`
  padding-top: 80px;
`;

function Tab({
  defaultItems = TABS_ITEMS,
  defaultTab = 0,
  tabColor = "#4800ce",
}) {
  const tabContainer = useRef();
  const [selected, setSelected] = useState(defaultTab);

  const handleClick = (key) => {
    setSelected(key);
  };

  return (
    <Wrapper title="Tab">
      <TabContrainer ref={tabContainer}>
        {defaultItems.map((tab) => (
          <TabValue
            key={tab.key}
            onClick={() => handleClick(tab.key)}
            className={selected === tab.key ? "selected" : ""}
            tabColor={tabColor}
          >
            {tab.title}
          </TabValue>
        ))}
      </TabContrainer>
      <Desc>{defaultItems[selected].desc}</Desc>
    </Wrapper>
  );
}

export default Tab;
