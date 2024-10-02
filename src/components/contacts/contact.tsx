import "./contact.css";
import emailjs from "@emailjs/browser";
import * as React from "react";
import * as Yup from "yup";

import { Formik, Form, useField, FieldHookConfig } from "formik";
import { TextField } from "@mui/material";

interface ClientInfo {
  clientName: string;
  clientProject: string;
  clientEmail: string;
}

type MyTextFieldProps = {label: string} & FieldHookConfig<string>;

const MyTextField: React.FC<MyTextFieldProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField label={label} {...field} error={meta.touched && !!meta.error} helperText={meta.error}/>
    </>
  );
};

const Contact = () => {
  const handleEmail = ({ clientName, clientProject, clientEmail } : ClientInfo) => {
    const message = `Hello, my name is ${clientName} and I am looking for you to help me with ${clientProject}. You can reach me at ${clientEmail}`

    const mailTemplate = {
      from_name: clientName,
      message: message,
      reply_to: clientEmail,
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
  };

  return (
    <>
      <div className="contacts-page">
        <div className="contacts-container">
          <div className="contacts-form">
            <Formik
              initialValues={{
                clientName: "",
                clientProject: "",
                clientEmail: "",
              }}
              validationSchema={Yup.object({
                clientName: Yup.string()
                  .required('Required'),
                  clientProject: Yup.string()
                  .required('Required'),
                  clientEmail: Yup.string().email('Invalid email address').required('Required'),
              })}
              onSubmit={(values : ClientInfo, actions) => {
                console.log({ values, actions });
                actions.setSubmitting(false);
                handleEmail(values);
              }}
            >
              
              {() => (
                <Form>
                  <div>
                    <span className="header-text">Hello, my name is </span>
                    <MyTextField
                      name="clientName"
                      type="text"
                      label="your name"
                    />
                  </div>
                  <div>
                    <span className="message-text">
                      and I am looking for you to help me with
                    </span>
                    <MyTextField
                      name="clientProject"
                      type="text"
                      label="your project"
                    />
                  </div>
                  <div>
                    <span className="">You can reach me at </span>
                    <MyTextField
                      name="clientEmail"
                      type="email"
                      label="your email"
                    />
                  </div>

                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
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
