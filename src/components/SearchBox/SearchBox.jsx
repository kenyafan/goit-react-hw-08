import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filters/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        placeholder="Enter search name"
        name="search"
      />
    </label>
  );
};

export default SearchBox;
