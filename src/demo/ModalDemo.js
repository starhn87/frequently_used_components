import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "../component/common/Wrapper";
import Modal from "../component/Modal";

const Text = styled.p`
  color: ${(props) => props.modalTextColor};
`;

function ModalDemo() {
  const [value, setValue] = useState(false);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onValueChange = () => {
    if (value) {
      return <Text modalTextColor={"#4800ce"}>{"HELLO CODESTATES!"}</Text>;
    }
  };

  return (
    <Wrapper title="Modal">
      <Modal
        value={value}
        onChange={onChange}
        onValueChange={onValueChange}
        modalText="wassssssssssup!"
        outsideClose={true}
      />
    </Wrapper>
  );
}

export default ModalDemo;
