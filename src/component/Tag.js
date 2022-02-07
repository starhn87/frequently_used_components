import React, { useState } from "react";
import styled from "styled-components";
import PropType from "prop-types";

const Container = styled.div`
  display: flex;
  width: 50%;
  height: 52px;
  margin: auto;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  overflow: hidden;
  outline: none;

  &.active {
    outline: 1px solid #4800ce;
  }

  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
`;

const TagBox = styled.li`
  display: flex;
  margin: 0 5px;
  padding: 8px 8px 7px;
  align-items: center;
  background-color: #4800ce;
  color: white;
  border-radius: 8px;
  white-space: pre;
`;

const Xbutton = styled.button`
  width: 17px;
  height: 17px;
  margin-left: 5px;
  padding: 0 0 1px;
  border-color: transparent;
  border-radius: 50%;
  line-height: 0;
  background-color: white;
  color: #4800ce;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 15px;
  border: none;

  &:focus {
    outline: none;
  }
`;

function Tag({ value, onChange }) {
  const [editingValue, setEditingValue] = useState("");
  const [active, setActive] = useState(false);

  const onClick = (pickedTag) => {
    const filteredTags = value.filter((tag) => tag !== pickedTag);
    onChange(filteredTags);
  };

  const onValueChange = (event) => {
    const {
      target: { value },
    } = event;

    setEditingValue(value);
  };

  const handleKeyPress = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (value.includes(editingValue)) {
      alert("이미 존재하는 태그입니다.");
      setEditingValue("");
      return;
    } else if (editingValue.trim() === "") {
      setEditingValue("");
      return;
    }

    onChange([...value, editingValue]);
    setEditingValue("");
  };

  return (
    <Container className={`${active ? "active" : ""}`}>
      <TagList>
        {value &&
          value.map((tag) => (
            <TagBox key={tag}>
              {tag}
              <Xbutton onClick={() => onClick(tag)}>x</Xbutton>
            </TagBox>
          ))}
      </TagList>
      <Input
        placeholder="Press enter to add tags"
        onKeyPress={handleKeyPress}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        value={editingValue}
        onChange={onValueChange}
      ></Input>
    </Container>
  );
}

Tag.propTypes = {
  value: PropType.arrayOf(PropType.string),
  onChange: PropType.func.isRequired,
};

export default Tag;
