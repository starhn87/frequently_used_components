import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Tag from "../component/Tag";

function TagDemo() {
  const [tags, setTags] = useState([]);

  return (
    <Wrapper title="Tag">
      <Tag value={tags} onChange={setTags} />
    </Wrapper>
  );
}

export default TagDemo;
