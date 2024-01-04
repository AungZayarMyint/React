
import useToggle from "./hooks/useToggle";

function App() {
  const [isShow, toggle] = useToggle();

  return (
    <section>
      <button onClick={toggle}>
        {isShow ? "hide" : "show"}</button>
      {
        isShow && <h1>component is showing</h1>
      }
    </section>
  );
}

export default App;
