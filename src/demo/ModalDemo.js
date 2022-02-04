import React, { useState } from "react";
import Wrapper from "../component/common/Wrapper";
import Modal from "../component/Modal";

function ModalDemo() {
  const [clicked, setClicked] = useState(false);

  const onChange = (newClicked) => {
    setClicked(newClicked);
  };

  return (
    <Wrapper title="Modal">
      <Modal
        value={clicked}
        onChange={onChange}
        modalText="wassssssssssup!"
        outsideClose={true}
      />
    </Wrapper>
  );
}

export default ModalDemo;
