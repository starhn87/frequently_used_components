import React, { useState } from "react";
import styled from "styled-components";
import ClickToEdit from "../component/ClickToEdit";
import Wrapper from "../component/common/Wrapper";
import Modal from "../component/Modal";

const Container = styled.div`
  padding-top: 50px;

  @media only screen and (max-width: 700px) {
    padding-top: 35px;
  }
`;

const Text = styled.span`
  padding-right: 10px;
`;

function ClickToEditDemo() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);
  const [modal, setModal] = useState(false);

  const onAgeChange = (value, event) => {
    if (isNaN(value)) {
      setModal(true);
      event.target.focus();
      return;
    }

    setAge(value);
  };

  return (
    <Wrapper title="ClickToEdit">
      <Modal
        value={modal}
        onChange={setModal}
        content={"숫자를 입력해주세요."}
      />
      <ClickToEdit
        title={"이름"}
        name={"name"}
        value={name}
        onChange={setName}
      />
      <ClickToEdit
        title={"나이"}
        name={"age"}
        value={age}
        onChange={onAgeChange}
      />
      <Container>
        <Text>이름 {name}</Text>
        <Text>나이 {age}</Text>
      </Container>
    </Wrapper>
  );
}

export default ClickToEditDemo;
