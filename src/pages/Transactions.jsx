import React from "react";
import Header from "../components/Header";
import Images from "../utils/Images";
import style from "./../css/settings.module.css";

const Transaction = () => {
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
        <h1>Transaction Page</h1>
      </div>
    </section>
  );
};

export default Transaction;
