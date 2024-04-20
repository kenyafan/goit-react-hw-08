import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <picture className={s.picture}>
        <img
          className={s.img}
          src="https://previews.123rf.com/images/captainvector/captainvector2204/captainvector220438213/185186877-a-telephone-diary.jpg"
          alt="Home"
        />
      </picture>
    </div>
  );
};

export default Home;
