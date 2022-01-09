import "./App.css";
import Card from "./Components/Card/Card";
import Switcher from "./Components/Switcher/Switcher";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setDark }}>
      <div className="h-full justify-center m-0 p-0 items-center flex bg-[#FFFFFF] flex-wrap  dark:bg-[#171717]">
        <Switcher />
        <Card />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
