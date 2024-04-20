import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSlice";
import s from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.navbar}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to="/"
      >
        Home
      </NavLink>

      <p> {user.email}</p>

      <ul className={s.list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.link)}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.link)}
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </>
        )}

        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())} className={s.button}>
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
