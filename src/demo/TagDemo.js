import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Tag from "../component/Tag";

function TagDemo() {
  const [tags, setTags] = useState([]);

  const onTagsChange = (newTag) => {
    setTags(newTag);
  };

  return (
    <Wrapper title="Tag">
      <Tag tags={tags} onTagsChange={onTagsChange} />
    </Wrapper>
  );
}

export default TagDemo;
