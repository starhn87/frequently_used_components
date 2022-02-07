import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Tag from "../component/Tag";

function TagDemo() {
  const [tags, setTags] = useState([]);

  const onChange = (newTag) => {
    setTags(newTag);
  };

  return (
    <Wrapper title="Tag">
      <Tag value={tags} onChange={onChange} />
    </Wrapper>
  );
}

export default TagDemo;
