import React from "react";
import style from "./../css/header.module.css";

const Header = ({ title, notImg, srcImg, name, profileImg }) => {
  return (
    <header className={style.header}>
      <div className={style.title}>
        <h2>Charts</h2>
      </div>
      <div className={style.widgets}>
        <img src={srcImg} alt="" />
        <img src={notImg} alt="" />
      </div>
      <div className={style.profile}>
        <p>{name}</p>
        <img src={profileImg} alt="" />
      </div>
    </header>
  );
};

export default Header;
