import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const RangeSlider = styled(Slider)(() => ({
  color: "#3880ff",
  height: 2,
  width: 140,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    border: " 3px solid #2563EB",
    backgroundColor: "#fff",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
    },
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 10,
    width: 10,
    borderRadius: 16,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
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
  return (
    <RangeSlider
      marks={marks}
      value={typeof value !== "number" ? 0 : value}
      onChange={handleSlide}
    ></RangeSlider>
  );
}
