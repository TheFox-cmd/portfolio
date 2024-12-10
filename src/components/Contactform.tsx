import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from '@mui/icons-material/Home';
import * as React from "react";
import * as Yup from "yup";

import { Formik, Form, useField, FieldHookConfig } from "formik";
import { TextField } from "@mui/material";
import ClientSchema from "../schema/clientSchema";
import { Link } from "react-router-dom";

type ClientInfo = Yup.InferType<typeof ClientSchema>;

type MyTextFieldProps = {
  label: string;
  multiline?: boolean;
  width: string;
} & FieldHookConfig<string>;

const MyTextField: React.FC<MyTextFieldProps> = ({
  label,
  multiline = false,
  width,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      {...field}
      error={meta.touched && !!meta.error}
      helperText={meta.error}
      multiline={multiline}
      rows={multiline ? 4 : undefined}
      variant="standard"
      sx={{ width }}
    />
  );
};

const ContactForm = () => {
  const handleEmail = ({
    clientName,
    clientProject,
    clientEmail,
  }: ClientInfo) => {
    const message = `Hello, my name is ${clientName} and I am looking for you to help me with ${clientProject}. You can reach me at ${clientEmail}`;

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
      <Formik
        initialValues={{
          clientName: "",
          clientProject: "",
          clientEmail: "",
        }}
        validationSchema={ClientSchema}
        onSubmit={(values: ClientInfo, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
          handleEmail(values);
        }}
      >
        {() => (
          <Form>
            <Grid container height="65px">
              <Grid
                fontWeight="bold"
                fontSize="16px"
                width="190px"
                height="65px"
                lineHeight="65px"
              >
                Hello there, my name is
              </Grid>
              <Grid
                padding="2px 0 0 0"
                fontWeight="bold"
                fontSize="16px"
                height="65px"
                lineHeight="65px"
              >
                <MyTextField
                  name="clientName"
                  type="text"
                  label="your name"
                  width="300px"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                fontWeight="bold"
                fontSize="16px"
                size={12}
                height="25px"
                lineHeight="25px"
              >
                and I am looking for you to help me with
              </Grid>
              <Grid fontWeight="bold" fontSize="20px" size={12}>
                <MyTextField
                  name="clientProject"
                  type="text"
                  label="brief project description"
                  multiline
                  width="490px"
                />
              </Grid>
            </Grid>
            <Grid container height="65px">
              <Grid
                fontWeight="bold"
                fontSize="16px"
                width="160px"
                height="65px"
                lineHeight="65px"
              >
                You can reach me at
              </Grid>
              <Grid
                padding="2px 0 0 0"
                fontWeight="bold"
                fontSize="16px"
                height="65px"
                lineHeight="65px"
              >
                <MyTextField
                  name="clientEmail"
                  type="text"
                  label="your email address"
                  width="330px"
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between" margin="30px 30px 0 0">
              <Button
                component={Link}
                to="/"
                variant="contained"
                endIcon={<HomeIcon />} 
                sx={{ bgcolor: "#0A2E5C" }}
              >
                Home
              </Button>
              <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                sx={{ bgcolor: "#0A2E5C" }}
              >
                Send
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
