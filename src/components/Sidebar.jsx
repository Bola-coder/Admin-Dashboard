import React from "react";
import sidebarContent from "../utils/sidebarContent";
import style from "./../css/sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        {sidebarContent.map((content, index) => (
          <nav key={index}>
            <div className={style.sidebar__heading}>
              <div className={style.sidebar__content}>
                <img src={content.title.image} alt="" />
                <h3 className={style.sidebar__title}>{content.title.text}</h3>
              </div>
            </div>
            {content.firstLinks.map((link, linkIndex) => (
              <div className={style.first__links} key={linkIndex}>
                <div className={style.sidebar__content}>
                  <img src={link.image} alt="" />
                  <p>{link.text}</p>
                </div>
              </div>
            ))}
            <div className={style.second}>
              {content.secondLinks.map((link, index) => (
                <div className={style.second__links} key={index}>
                  <div className={style.sidebar__content}>
                    <img src={link.image} alt="" />
                    <p>{link.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
