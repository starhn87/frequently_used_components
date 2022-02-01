import React, { useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

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

function Tag({ tagColor = "#4800ce" }) {
  const tagBar = useRef();
  const [tags, setTags] = useState([]);
  const [focus, setFocus] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const tagBarCurrent = tagBar.current;
    const newTag = tagBarCurrent.value;

    if (tags.includes(newTag)) {
      alert("이미 존재하는 태그입니다.");
      tagBarCurrent.value = "";
      return;
    } else if (newTag.trim() === "") {
      tagBarCurrent.value = "";
      return;
    }

    setTags([...tags, newTag]);
    tagBarCurrent.value = "";
  };

  const onClick = (pickedTag) => {
    const filteredTags = tags.filter((tag) => tag !== pickedTag);
    setTags(filteredTags);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Wrapper title="Tag">
      <Container focus={focus} tagColor={tagColor}>
        <TagList>
          {tags.map((tag) => (
            <TagBox key={tag} tagColor={tagColor}>
              {tag}
              <Xbutton onClick={() => onClick(tag)} tagColor={tagColor}>
                x
              </Xbutton>
            </TagBox>
          ))}
        </TagList>
        <Input
          ref={tagBar}
          placeholder="Press enter to add tags"
          onKeyPress={handleKeyPress}
          onFocus={onFocus}
          onBlur={onBlur}
        ></Input>
      </Container>
    </Wrapper>
  );
}

export default Tag;