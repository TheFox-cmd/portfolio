import { useEffect, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [readySend, setReadySend] = useState(false);

  useEffect(() => {
    if (!readySend) return;



    const mailTemplate = {
      from_name: name,
      message: message,
      reply_to: mail,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICEID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATEID as string,
        mailTemplate,
        import.meta.env.VITE_EMAILJS_PUBLICKEY as string
      )
      .then(
        (response) => {
          alert("Email sent successfully");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Email failed to send");
          console.log("FAILED...", error);
        }
      );
    
    setReadySend(false);
  }, [readySend]);

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !mail) {
      alert("Please fill in all fields");
      return;
    }

    setMessage(
      `Hello, my name is ${name} and I am looking for you to help me with ${description}. You can reach me at ${mail}`
    );

    setReadySend(true);
  };

  return (
    <>
      <div className="contacts-page">
        <div className="contacts-container">
          <div className="contacts-message">
            <form onSubmit={handleEmail}>
              <div className="header">
                <span className="header-text">Hello, my name is </span>
                <input
                  type="text"
                  placeholder="your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="message">
                <span className="message-text">
                  and I am looking for you to help me with{" "}
                </span>
                <input
                  type="text"
                  placeholder="brief project description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="footer">
                <span className="">You can reach me at </span>
                <input
                  type="text"
                  placeholder="Your email address"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <button>Send</button>
            </form>
          </div>
          <div className="contacts-info">
            <div className="info email">rkoda997@gmail.com</div>
            <div className="info phone">5106126878</div>
            <div className="info discord">thefox_cmd</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
