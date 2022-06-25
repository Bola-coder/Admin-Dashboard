import React from "react";
import Header from "../components/Header";
import Images from "../utils/Images";
import style from "./../css/flex.module.css";

const Referrals = () => {
  return (
    <section className={style.settings}>
      <Header
        title="Transactions"
        srcImg={Images.search}
        notImg={Images.notification}
        name="John Doe"
        profileImg={Images.person}
      />
      <div>
        <h2>Referrals</h2>
      </div>
    </section>
  );
};

export default Referrals;
