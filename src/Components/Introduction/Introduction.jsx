import "./Introduction.css";
import Me from "../../img/me.png";
import { FaGithub, FaLinkedin, FaInstagram, FaPinterest, FaImdb, FaGoodreads } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import { BiBookContent } from 'react-icons/bi';

import { useContext} from "react";
import { ThemeContext } from "../../Context";

const Introduction = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Abdullah</h1>
          <h4 className="i-and">and</h4>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">UI Developer</div>
              <div className="i-title-item">Content Writer</div>
              <div className="i-title-item">Blogger</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a developer gene, writer lobe, pedal addict, skate motive, coffee freak and late V.
          </p>
          <div className="i-links">
            <div className="i-link-wrapper">
              <div className="i-link-item"> 
              	<a href="https://blog.abdullahcok.dev/cv" target="_blank"><CgFileDocument/></a>
                <a href="https://blog.abdullahcok.dev/" target="_blank"><BiBookContent /></a>
                <a href="https://github.com/abdullahcok/" target="_blank"><FaGithub /></a>
                <a href="https://linkedin.com/in/abdullahcok" target="_blank"><FaLinkedin /></a>
                <a href="https://instagram.com/abdullahcok" target="_blank"><FaInstagram /></a>
                <a href="https://pinterest.com/abdullahcok" target="_blank"><FaPinterest /></a>
                <a href="https://www.imdb.com/user/ur43039977/?ref_=_usr" target="_blank"><FaImdb /></a>
                <a href="https://goodreads.com/abdullahcok" target="_blank"><FaGoodreads /></a>
              </div>
            </div>
          </div>
          <img src={Me} alt="Abdullah Çok" className="i-img" />
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="#999"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        {/* <div className="i-bg"></div> */}
      </div>
    </div>
  );
};

export default Introduction;
