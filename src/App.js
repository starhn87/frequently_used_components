import { GlobalStyles } from "./component/GlobalStyles";
import Modal from "./component/Modal";
import MouseCircle from "./component/MouseCircle";
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
    </>
  );
}

export default App;
