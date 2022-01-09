import { useState, useContext } from "react";
import ThemeContext from "../../ThemeContext";

export default function Switcher() {
  const { isDark, setDark } = useContext(ThemeContext);
  return (
    <div>
      <input
        checked={isDark}
        type="checkbox"
        onChange={(e) => {
          let flag = isDark === true ? false : true;
          if (flag) {
            window.document.documentElement.classList.add("dark");
          } else {
            window.document.documentElement.classList.remove("dark");
          }
          setDark(flag);
        }}
        name="switch"
        id="switch"
      />
      <label className="Switcher" htmlFor="switch"></label>
    </div>
  );
}
