import "./Toggle.css";
import Day from "../../img/sun.png";
import Night from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Day} alt="" className="t-icon" />
      <img src={Night} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
