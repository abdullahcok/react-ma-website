import "./About.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Some UI development skills of Computer Science utilizing solid training and experienced.
        </p>
        <p className="a-desc">
        Developed web pages for commercial designs with UI & Front-End Development to create and
maintain interactive multi-page web sites.

Demonstrated strong skills in power of HTML/CSS and experienced React.
        </p>
        <br/>
        <p className="a-desc">
        I really like writing articles, story also in summary contents inspiring by customers, movies or absolutely signs of the life.
        </p>
        <div className="a-award">
          <a target="_blank" href="https://www.freecodecamp.org/certification/abdullahcok/responsive-web-design"><img src={Award} alt="Abdullah Çok certified by FreeCodeCamp.Org" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Responsive Web Design Certification from FreeCodeCamp.Org</h4>
            <p className="a-award-desc">
              Completed 5 high skill project and awarded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
