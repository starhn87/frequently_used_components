import React, { useState } from "react";
import ClickToEdit from "../component/ClickToEdit";

function ClickToEditDemo() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);

  const onNameChange = (newName) => {
    setName(newName);
  };

  const onAgeChange = (newAge) => {
    setAge(newAge);
  };

  return (
    <ClickToEdit
      defaultName={name}
      defaultAge={age}
      onNameChange={onNameChange}
      onAgeChange={onAgeChange}
    />
  );
}

export default ClickToEditDemo;
