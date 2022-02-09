import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Tag from "../component/Tag";

function TagDemo() {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setValue(value);
  };

  const onRemoveTag = (pickedTag) => {
    const filteredTags = value.filter((tag) => tag !== pickedTag);
    setTags(filteredTags);
  };

  const onPressEnter = (event) => {
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

    setTags([...tags, value]);
    setValue("");
  };

  return (
    <Wrapper title="Tag">
      <Tag
        value={value}
        onChange={onChange}
        onPressEnter={onPressEnter}
        tags={tags}
        onRemoveTag={onRemoveTag}
      />
    </Wrapper>
  );
}

export default TagDemo;
