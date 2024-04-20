import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { nanoid } from "nanoid";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import s from "./ContactForm.module.css";

const nameFieldId = nanoid();
const telFieldId = nanoid();

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  tel: Yup.string()
    .matches(/^\+?\d[\d-.() ]*$/, "Невірний формат номера телефону")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", tel: "" }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact({ name: values.username, number: values.tel }));
        actions.resetForm();
      }}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={s.input}
          placeholder="Enter name"
        />
        <ErrorMessage className={s.error} component="span" name="username" />

        <label htmlFor={telFieldId}>Number</label>
        <Field
          type="tel"
          name="tel"
          id={telFieldId}
          className={s.input}
          placeholder="Enter phone number"
        />
        <ErrorMessage className={s.error} component="span" name="tel" />
        <button type="submit" className={s.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
