import { GlobalStyles } from "./component/common/GlobalStyles";
import Modal from "./component/Modal";
import MouseCircle from "./component/common/MouseCircle";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";

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
      <Tab />
    </>
  );
}

export default App;
