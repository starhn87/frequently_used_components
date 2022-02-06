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

  outline: ${(props) =>
    props.focus
      ? `1px solid ${props.tagColor};
  `
      : "none"};

  @media only screen and (max-width: 700px) {
    width: 80%;
  }
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

const TagList = styled.ul`
  display: flex;
  align-items: center;
`;

const TagBox = styled.li`
  display: flex;
  margin: 0 5px;
  padding: 8px 8px 7px;
  align-items: center;
  background-color: ${(props) => props.tagColor};
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
  color: ${(props) => props.tagColor};
  cursor: pointer;
`;

function Tag({ tags, onTagsChange, tagColor = "#4800ce" }) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (tags.includes(value)) {
      alert("이미 존재하는 태그입니다.");
      setValue("");
      return;
    } else if (value.trim() === "") {
      setValue("");
      return;
    }

    onTagsChange([...tags, value]);
    setValue("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setValue(value);
  };

  const onClick = (pickedTag) => {
    const filteredTags = tags.filter((tag) => tag !== pickedTag);
    onTagsChange(filteredTags);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container focus={focus} tagColor={tagColor}>
      <TagList>
        {tags &&
          tags.map((tag) => (
            <TagBox key={tag} tagColor={tagColor}>
              {tag}
              <Xbutton onClick={() => onClick(tag)} tagColor={tagColor}>
                x
              </Xbutton>
            </TagBox>
          ))}
      </TagList>
      <Input
        placeholder="Press enter to add tags"
        onKeyPress={handleKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
      ></Input>
    </Container>
  );
}

Tag.propTypes = {
  tags: PropType.array.isRequired,
  onTagsChange: PropType.func.isRequired,
  tagColor: PropType.string,
};

export default Tag;
