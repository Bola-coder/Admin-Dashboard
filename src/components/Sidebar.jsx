import React from "react";
import sidebarContent from "../utils/sidebarContent";

const Sidebar = () => {
  return (
    <>
      <h3>Sidebar</h3>
      <div className="sidebar">
        {sidebarContent.map((content, index) => (
          <nav key={index}>
            <h3 className="title">{content.title}</h3>
            {content.firstLinks.map((link, linkIndex) => (
              <div className="first__links" key={linkIndex}>
                <p>{link}</p>
              </div>
            ))}
            {content.secondLinks.map((link, index) => (
              <div className="second__links" key={index}>
                <p>{link}</p>
              </div>
            ))}
          </nav>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
