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

function AutoComplete({ value, onChange, options }) {
  const [editingValue, setEditingValue] = useState("");
  const autoComplete = useRef();

  const inputWord = (word) => {
    setEditingValue(word);
    onChange([]);
  };

  const onEditingValueChange = (event) => {
    const {
      target: { value },
    } = event;

    const newList = options.filter((word) =>
      word.label.toLowerCase().includes(editingValue.toLowerCase())
    );

    onChange(newList);
    setEditingValue(value);
  };

  const onClick = () => {
    setEditingValue("");
    onChange([]);
  };

  const handleClick = useCallback(
    (event) => {
      if (event.target === autoComplete) {
        return;
      }

      onChange([]);
    },
    [onChange]
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
          value={editingValue}
          onChange={onEditingValueChange}
          className={`${value.length > 0 ? "list" : "active"}`}
        />
        <Xbutton onClick={onClick}>x</Xbutton>
      </Box>
      <Div
        ref={autoComplete}
        count={value ? value.length : 0}
        className={`${value.length > 0 ? "list" : ""}`}
      >
        <List>
          {value &&
            value.map((word) => (
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
  value: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
  onChange: PropType.func.isRequired,
  options: PropType.arrayOf(
    PropType.shape({
      label: PropType.string,
      year: PropType.number,
    })
  ).isRequired,
};

export default AutoComplete;
