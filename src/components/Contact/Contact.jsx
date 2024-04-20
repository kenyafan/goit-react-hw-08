import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  console.log(contact);

  const { id, name, number } = contact;

  return (
    <>
      <div>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
