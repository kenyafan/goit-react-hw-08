import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.NotFound}>
      <h1 className={s.title}>
        <span className={s.numberError}>404</span>Page not found
      </h1>
      <Link className={s.link} to="/">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
