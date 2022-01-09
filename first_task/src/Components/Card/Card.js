import RangeInput from "../RangeInput/RangeInput";
import { useState } from "react";

export default function Card() {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const handleSlide = (e, newValue) => {
    setValue(e.target.value);
    setInputValue(e.target.value);
  };
  const handleInput = (e) => {
    let value = e.target.value;
    let pattern = /^\-{0,1}\d{1,3}\.{0,1}\d{0,2}$/;
    let result = pattern.test(value);
    if (result) {
      let numValue = Number.parseFloat(value);
      if (Number.isNaN(numValue)) numValue = "";
      if (numValue > 100) numValue = 100;
      if (numValue < 0) numValue = 0;
      setInputValue(numValue.toString());
      setValue(numValue);
    } else {
      setValue(0);
      setInputValue("0");
    }
  };

  return (
    <div className="shadow-lg rounded-lg border h-[76px] justify-between flex items-center w-[300px] px-[30px] py-[20px] border-[#E5E7EB]">
      <RangeInput value={value} handleSlide={handleSlide}></RangeInput>
      <div className="relative w-[70px] h-full">
        <label className="absolute right-[3px] color-true-grey-900 z-10 py-2">
          %
        </label>
        <input
          onBlur={handleInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-[75px] px-2
          absolute
          left-0
          top-0
          pr-[25px]
          py-1.5
          text-base
          font-normal
          text-true-gray-900
          bg-white bg-clip-padding
          border border-solid border-[#E5E7EB]
          rounded
          transition
          ease-in-out
          m-0
          focus:bg-white focus:border-blue-600 focus:outline-none"
          type="number"
        ></input>
      </div>
    </div>
  );
}
