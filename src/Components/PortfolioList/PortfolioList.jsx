import "./PortfolioList.css";
import Portfolio from "../Portfolio/Portfolio";
import { portfolio } from "../../Data";

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Attractive Products Made</h1>
        <p className="pl-desc">
          I have the portfolio that waits for you to look at.
        </p>
      </div>
      <div className="pl-list">
        {portfolio.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
