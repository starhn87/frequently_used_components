import React, { useState } from "react";
import Tag from "../component/Tag";

function TagDemo() {
  const [tags, setTags] = useState([]);

  const onTagsChange = (newTag) => {
    setTags(newTag);
  };

  return <Tag defaultTags={tags} onTagsChange={onTagsChange} />;
}

export default TagDemo;
