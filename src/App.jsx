import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <section>
      <button onClick={()=>{
        setIsShow(prev => !prev)
      }}
      >
        {isShow ? "hide" : "show"}</button>
      {
        isShow && <h1>component is showing</h1>
      }
    </section>
  );
}

export default App;
