import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contacts-page">
        <div className="contacts-container">
          <div className="contacts-message">
            <div className="header">
              <span className="header-text">Hello, my name is </span>
              <input type="text" placeholder="your name" />
            </div>
            <div className="message">
              <span className="message-text">and I am looking for you to help me with </span>
              <input type="text" placeholder="brief project description" />
            </div>
            <div className="footer">
              <span className="">You can reach me at </span>
              <input type="text" placeholder="Your email address" />
            </div>
            <button>Send</button>
          </div>
          <div className="contacts-info">
            <div className="info email">rkoda997@gmail.com</div>
            <div className="info phone">5106126878</div>
            <div className="info discord">thefox_cmd</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;