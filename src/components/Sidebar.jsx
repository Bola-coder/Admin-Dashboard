import React from "react";
import sidebarContent from "../utils/sidebarContent";
import style from "./../css/sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        {sidebarContent.map((content, index) => (
          <nav key={index}>
            <h3 className={style.sidebar__title}>{content.title}</h3>
            {content.firstLinks.map((link, linkIndex) => (
              <div className={style.first__links} key={linkIndex}>
                <p>{link}</p>
              </div>
            ))}
            <div className={style.second}>
              {content.secondLinks.map((link, index) => (
                <div className={style.second__links} key={index}>
                  <p>{link}</p>
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
