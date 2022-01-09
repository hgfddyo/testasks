import "./App.css";
import Card from "./Components/Card/Card";
import Switcher from "./Components/Switcher/Switcher";

function App() {
  return (
    <div className="h-full justify-center m-0 p-0 items-center flex">
      <Switcher />
      <Card />
    </div>
  );
}

export default App;
