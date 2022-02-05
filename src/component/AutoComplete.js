import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import PropType from "prop-types";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 50%;
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

  ${(props) =>
    props.count === 0
      ? `
      &: focus {
        box-shadow: 0 5px 4px -2px #dbdbdb;
      }
      `
      : `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
  `}

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
  display: ${(props) => (props.count === 0 ? "none" : "block")};
  overflow: hidden;
  width: 100%;
  border: 1px solid #e3e3e3;
  border-top: none;
  border-bottom-right-radius: 17px;
  border-bottom-left-radius: 17px;
  box-shadow: 0 5px 4px -2px #dbdbdb;
  z-index: 1;
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
  }
`;

function AutoComplete({ matchingList, onMatchingListChange, WordList }) {
  const [value, setValue] = useState("");
  const recoList = useRef();

  const onClick = () => {
    setValue("");
    onMatchingListChange([]);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    const newList = WordList.filter((word) =>
      word.label.toLowerCase().includes(value.toLowerCase())
    );

    onMatchingListChange(newList);
    setValue(value);
  };

  const inputWord = (word) => {
    setValue(word);
    onMatchingListChange([]);
  };

  const handleClick = useCallback(
    (event) => {
      if (event.target === recoList) {
        return;
      }

      onMatchingListChange([]);
    },
    [onMatchingListChange]
  );

  useEffect(() => {
    onMatchingListChange?.(matchingList);
  }, [matchingList, onMatchingListChange]);

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
          onChange={onChange}
          value={value}
          count={matchingList ? matchingList.length : 0}
        />
        <Xbutton onClick={onClick}>x</Xbutton>
      </Box>
      <Div ref={recoList} count={matchingList ? matchingList.length : 0}>
        <List>
          {matchingList &&
            matchingList.map((word) => (
              <Data key={uuid()} onClick={() => inputWord(word.label)}>
                {word.label}
              </Data>
            ))}
        </List>
      </Div>
    </Container>
  );
}

AutoComplete.propTypes = {
  matchingList: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
  onmatchingListChange: PropType.func,
  WordList: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
};

export default AutoComplete;
