import React from "react";
import Header from "../components/Header";
import Images from "../utils/Images";
import style from "./../css/settings.module.css";

const Home = () => {
  return (
    <section className={style.settings}>
      <Header
        title="Settings"
        srcImg={Images.search}
        notImg={Images.notification}
        name="John Doe"
        profileImg={Images.person}
      />
    </section>
  );
};

export default Home;
