import React, { useState } from "react";
import Modal from "../component/Modal";

function ModalDemo() {
  const [clicked, setClicked] = useState(false);

  const onClickedChange = (newClicked) => {
    setClicked(newClicked);
  };

  return (
    <Modal
      clicked={clicked}
      onClickedChange={onClickedChange}
      modalText="wassssssssssup!"
      outsideClose={true}
    />
  );
}

export default ModalDemo;
