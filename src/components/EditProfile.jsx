import React from "react";
import Images from "../utils/Images";
import style from "./../css/editProfile.module.css";

const EditProfile = () => {
  return (
    <div className={style.edit__profile}>
      <p className={style.text}>Edit Profile</p>
      <form className={style.form}>
        <div className={style.formControl}>
          <label htmlFor="profileImage" className={style.img__label}>
            <img src={Images.person} alt="" className={style.profileImg} />
            <img src={Images.edit} alt="" className={style.editImg} />
          </label>
          <input
            type="file"
            id="profileImage"
            style={{ display: "none" }}
            accept="*.png *.jpg *.jpeg"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="name" className={style.label}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="dob" className={style.label}>
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            placeholder="Enter your Date of Birth"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="phone" className={style.label}>
            Phone Number
          </label>
          <input
            type="telephone"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <div className={style.formControl}>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
