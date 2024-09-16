import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DynamicForm from "./components/FormRender";
import data from './jsonData'


// render the ui , order /capture properties , validations
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DynamicForm  schema={data}/>
    </>
  );
}

export default App;
