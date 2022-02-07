import React from "react";
import { GlobalStyles } from "./component/common/GlobalStyles";
import MouseCircle from "./component/common/MouseCircle";
import ToggleDemo from "./demo/ToggleDemo";
import { ModalDemo } from "./demo/ModalDemo";
import TabDemo from "./demo/TabDemo";
import TagDemo from "./demo/TagDemo";
import ClickToEditDemo from "./demo/ClickToEditDemo";
import AutoCompleteDemo from "./demo/AutoCompleteDemo";

function App() {
  return (
    <>
      <GlobalStyles />
      <MouseCircle />
      <ToggleDemo />
      <ModalDemo />
      <TabDemo />
      <TagDemo />
      <AutoCompleteDemo />
      <ClickToEditDemo />
    </>
  );
}

// TODO 탭 css 변경 필요 여부 묾어보기 (설명회)
export default App;
