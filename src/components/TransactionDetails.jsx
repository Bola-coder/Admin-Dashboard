import React from "react";
import Images from "../utils/Images";
import transactions from "../utils/transactionContent";
import style from "./../css/transactionDetails.module.css";
const TransactionDetails = () => {
  function setPriorityClass(priority) {
    if (priority === "High") return style.high;
    else if (priority === "Normal") return style.normal;
    else if (priority === "Low") return style.low;
    else return "";
  }
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
      <div className={style.details__contents}>
        {transactions.map((transaction, index) => (
          <div key={index}>
            <div className={style.content__header}>
              {transaction.title.map((title) => (
                <p>{title}</p>
              ))}
            </div>
            <div className={style.content__body}>
              {transaction.content.map((content, index) => (
                <span key={index}>
                  <div>
                    <img src={content.image} alt="Img here" />
                    <p>{content.detail}</p>
                  </div>
                  <p>{content.name}</p>
                  <p>{content.date}</p>
                  <p className={setPriorityClass(content.priority)}>
                    {content.priority}
                  </p>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionDetails;
