import { GlobalStyles } from "./component/common/GlobalStyles";
import Modal from "./component/Modal";
import MouseCircle from "./component/common/MouseCircle";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

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
      <AutoComplete />
      <ClickToEdit />
    </>
  );
}

// TODO 탭 css 변경 필요 여부 묾어보기 (설명회)
// TODO click to edit readme 작성
// TODO 웹팩 적용 및 netlify 배포
// TODO 코드 리팩토링 및 readme 정리
export default App;
