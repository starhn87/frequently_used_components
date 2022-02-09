import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import PropType from "prop-types";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 50%;

  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

const Box = styled.div`
  display: flex;
`;

const Input = styled.input`
  overflow: hidden;
  float: left;
  width: 100%;
  height: 52px;
  padding: 10px;
  flex-shrink: 0;
  font-size: 15px;
  cursor: default;
  border: 1px solid #e3e3e3;
  border-radius: 17px;

  &.list {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.active {
    &:focus {
      box-shadow: 0 5px 4px -2px #dbdbdb;
    }
  }

  &:focus {
    outline: none;
  }
`;

const Xbutton = styled.span`
  position: relative;
  right: 20px;
  width: 10px;
  height: 14px;
  margin: auto;
  font-size: 15px;
  color: #050505;
  cursor: pointer;
  background-color: #fff;
`;

const Div = styled.div`
  position: absolute;
  display: none;
  overflow: hidden;
  width: 100%;
  border: 1px solid #e3e3e3;
  border-top: none;
  border-bottom-right-radius: 17px;
  border-bottom-left-radius: 17px;
  box-shadow: 0 5px 4px -2px #dbdbdb;
  background-color: white;

  &.list {
    display: block;
  }
`;

const List = styled.ul`
  overflow-y: auto;
  max-height: 200px;
  padding: 5px 0;
`;

const Data = styled.li`
  padding: 3px 10px;
  text-align: left;

  &:hover {
    background-color: #eeeeee;
    cursor: default;
  }
`;

function AutoComplete({
  value,
  onChange,
  suggestions,
  onSuggestionsChange,
  onSuggestionClick,
  onResetValue,
}) {
  const autoComplete = useRef();

  const handleClick = useCallback(
    (event) => {
      if (event.target === autoComplete) {
        return;
      }

      onSuggestionsChange([]);
    },
    [onSuggestionsChange]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <Container>
      <Box>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          className={`${suggestions.length > 0 ? "list" : "active"}`}
        />
        <Xbutton onClick={onResetValue}>x</Xbutton>
      </Box>
      <Div
        ref={autoComplete}
        className={`${suggestions.length > 0 ? "list" : ""}`}
      >
        <List>
          {suggestions &&
            suggestions.map((word) => (
              <Data key={uuid()} onClick={() => onSuggestionClick(word.label)}>
                {word.label}
              </Data>
            ))}
        </List>
      </Div>
    </Container>
  );
}

AutoComplete.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  suggestions: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
  onSuggestionsChange: PropType.func.isRequired,
  onSuggestionClick: PropType.func.isRequired,
  onResetValue: PropType.func.isRequired,
};

export default AutoComplete;
