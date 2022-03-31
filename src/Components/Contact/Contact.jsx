import "./Contact.css";
// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";  
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c_abdullahcok",
        "template_c_abdullahcok",
        formRef.current,
        "A3kS2GzLARaTFV93B"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk about your needs.</h1>
          {/* <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +90
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              web@abdullahcok.dev
            </div>
          </div> */}
          <p className="c-description">
            <b>What’s on your deep?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#434343", color: darkMode && "#fff"}} type="text" placeholder="Type your full name..." name="user_name" />
            <input style={{backgroundColor: darkMode && "#434343", color: darkMode && "#fff"}} type="text" placeholder="Fill the topic for real..." name="user_subject" />
            <input style={{backgroundColor: darkMode && "#434343", color: darkMode && "#fff"}} type="text" placeholder="Enter an available e-mail..." name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#434343", color: darkMode && "#fff"}} rows="5" placeholder="Write a message about your idea that's why I would contact you..." name="message" />
            <button style={{color: "#333"}}>Submit</button>
            <p className="thank">{done && "Thanks for contaction..."}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;