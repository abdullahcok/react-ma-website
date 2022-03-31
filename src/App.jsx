import { useContext } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Introduction from "./Components/Introduction/Introduction";
import PortfolioList from "./Components/PortfolioList/PortfolioList";
import Toggle from "./Components/Toggle/Toggle";
import { ThemeContext } from "./Context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode && "#fff",
      }}
    >
      <Toggle />
      <Introduction />
      <About />
      <PortfolioList />
      <Contact />
    </div>
  );
};

export default App;
