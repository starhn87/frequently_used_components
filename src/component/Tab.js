import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

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

  @media only screen and (max-width: 700px) {
    padding-top: 50px;
  }
`;

function Tab({
  value,
  onChange,
  defaultItems = TABS_ITEMS,
  tabColor = "#4800ce",
}) {
  return (
    <>
      <TabContrainer>
        {defaultItems.map((tab) => (
          <TabValue
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={value === tab.key ? "selected" : ""}
            tabColor={tabColor}
          >
            {tab.title}
          </TabValue>
        ))}
      </TabContrainer>
      <Desc>{defaultItems[value].desc}</Desc>
    </>
  );
}

Tab.propTypes = {
  value: PropType.number.isRequired,
  onChange: PropType.func.isRequired,
  defaultItems: PropType.object,
  tabColor: PropType.string,
};

export default Tab;
