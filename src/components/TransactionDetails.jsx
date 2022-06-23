import React from "react";
import Images from "../utils/Images";
import transactions from "../utils/transactionContent";
import style from "./../css/transactionDetails.module.css";
const TransactionDetails = () => {
  return (
    <div className={style.transaction__details}>
      <div className={style.details__header}>
        <h4>ALL Transactions</h4>
        <div>
          <span>
            <img src={Images.sortIcon} alt="" />
            <p>Sort</p>
          </span>
          <span>
            <img src={Images.filterIcon} alt="" />
            <p>Filter</p>
          </span>
        </div>
      </div>
      <div className={style.details__content}>
        
      </div>
    </div>
  );
};

export default TransactionDetails;
