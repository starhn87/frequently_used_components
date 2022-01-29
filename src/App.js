import GlobalStyles from "./component/GlobalStyles";
import MouseCircle from "./component/MouseCircle";
import Toggle from "./component/Toggle";

function App() {
  return (
    <>
      <GlobalStyles />
      <MouseCircle />
      <Toggle defaultChecked={false} color="blue" disabled={false} />
    </>
  );
}

export default App;
