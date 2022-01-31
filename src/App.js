import { GlobalStyles } from "./component/common/GlobalStyles";
import Modal from "./component/Modal";
import MouseCircle from "./component/common/MouseCircle";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";

function App() {
  return (
    <>
      <GlobalStyles />
      <MouseCircle />
      <Toggle
        defaultChecked={false}
        color="blue"
        disabled={false}
        switchButtonColor="aliceblue"
      />
      <Modal modalText="wassssssssssup!" outsideClose={true} />
      <Tab tabColor="purple" />
      <Tag />
    </>
  );
}

// TODO 탭 css 변경 필요 여부 묾어보기 (설명회)
// TODO Tag ReadMe 작성
export default App;
