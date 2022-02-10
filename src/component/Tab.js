import React from "react";
import styled from "styled-components";
import PropType from "prop-types";

const TabContrainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;

  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

const TabElement = styled.button`
  padding: 10px 0;
  flex-grow: 1;
  color: black;
  border-color: transparent;
  cursor: pointer;
  transition: 0.3s;

  &.selected {
    background-color: #4800ce;
    color: white;
  }
`;

function Tab({ selectedTab, onChange, items }) {
  return (
    <TabContrainer>
      {items.map((tab) => (
        <TabElement
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={selectedTab === tab.key ? "selected" : ""}
        >
          {tab.title}
        </TabElement>
      ))}
    </TabContrainer>
  );
}

Tab.propTypes = {
  selectedTab: PropType.number.isRequired,
  onChange: PropType.func.isRequired,
  items: PropType.arrayOf(
    PropType.shape({
      key: PropType.number.isRequired,
      title: PropType.string.isRequired,
      desc: PropType.string.isRequired,
      onClick: PropType.func,
    })
  ),
};

export default Tab;
