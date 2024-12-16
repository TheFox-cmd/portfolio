import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import SendIcon from "@mui/icons-material/Send";
import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, useField, FieldHookConfig } from "formik";
import { TextField } from "@mui/material";
import ClientSchema from "../schema/clientSchema";

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
      rows={multiline ? 3 : undefined}
      variant="outlined"
      sx={{
        width,
        borderColor: "var(--quinary-color)",
        "& label": {
          color: "var(--quinary-color)",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "var(--tertiary-color)",
          },
          "&:hover fieldset": {
            borderColor: "var(--tertiary-color)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--tertiary-color)",
          },
          "& input": {
            color: "var(--quinary-color)",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--quinary-color)",
        },
        "& .MuiInputBase-inputMultiline": {
          color: "var(--quinary-color)", 
        },
        "& .MuiInput-underline": {
          borderBottom: "none",
        },
      }}
    />
  );
};

const ContactForm = () => {
  const handleEmail = ({
    clientName,
    clientEmail,
    clientProject,
  }: ClientInfo) => {
    const mailTemplate = {
      from_name: clientName,
      message: clientProject,
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
          clientEmail: "",
          clientProject: "",
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
            <Grid container height="fit-content" spacing={2}>
              <Grid size={6}>
                <MyTextField label="Your Name" name="clientName" width="100%" />
              </Grid>
              <Grid size={6}>
                <MyTextField
                  label="Your Email"
                  name="clientEmail"
                  width="100%"
                />
              </Grid>
              <Grid size={12}>
                <MyTextField
                  label="Your Message"
                  name="clientProject"
                  multiline
                  required
                  width="100%"
                />
              </Grid>
              <Grid container justifyContent="flex-end" size={12}>
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  sx={{
                    bgcolor: "var(--tertiary-color)",
                    color: "var(--contrast-color)",
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
