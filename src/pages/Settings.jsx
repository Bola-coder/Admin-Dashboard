import React from "react";
import Header from "../components/Header";
import Images from "../utils/Images";
import EditProfile from "../components/EditProfile";
import style from "./../css/settings.module.css";

const Home = () => {
  return (
    <section className={style.settings}>
      <Header
        title="My Profile"
        srcImg={""}
        notImg={Images.notification}
        name="John Doe"
        profileImg={Images.person}
      />
      <EditProfile />
    </section>
  );
};

export default Home;
