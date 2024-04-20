import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import s from "./AuthForm.module.css";

const AuthForm = ({ title, onSubmit, initialValues, type }) => {
  return (
    <div className={s.formWrapper}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            {type === "register" && (
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            )}
            <Field
              className={s.input}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className={s.btnWrapper}>
            <button className={s.btn} type="submit">
              {title}
            </button>
            <p>
              You{" "}
              {type === "register"
                ? "already have an account?"
                : "don't have an account?"}{" "}
              <Link to={type === "register" ? "/login" : "/register"}>
                {" "}
                {type === "register" ? "Login" : "Register"}
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthForm;
