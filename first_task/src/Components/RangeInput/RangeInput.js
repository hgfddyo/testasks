import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

const RangeSlider = styled(Slider)(({ isdark }) => ({
  color: isdark === "true" ? "#FFFFFF" : "#bfbfbf",
  height: 2,
  width: 140,
  padding: "15px 0",

  "& .MuiSlider-track": {
    color: "#3880ff",
  },
  "& .MuiSlider-rail ": {
    opacity: 0.9,
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    border: " 3px solid #2563EB",
    backgroundColor: "#fff",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
    },
  },
  "&:before": {
    display: "none",
  },
  "& .MuiSlider-mark": {
    backgroundColor: isdark === "true" ? "#FFFFFF" : "#bfbfbf",
    height: 5,
    width: 5,
    borderRadius: 16,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "#3880ff",
    },
  },
}));
const marks = [
  { value: 0 },
  { value: 25 },
  { value: 50 },
  { value: 75 },
  { value: 100 },
];

export default function RangeInput({ value, handleSlide }) {
  const { isDark, setDark } = useContext(ThemeContext);
  return (
    <RangeSlider
      isdark={isDark.toString()}
      marks={marks}
      value={typeof value !== "number" ? 0 : value}
      onChange={handleSlide}
    ></RangeSlider>
  );
}
