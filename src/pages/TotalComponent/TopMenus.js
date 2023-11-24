import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/TopMenuStyle.css";
import "../css/neuMorphismStyle.css";
import { motion } from "framer-motion";
import Logo from "../PageComponent/Logo";
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";
import InfoPages from "./InfoPages.js";

function TopMenus({ menus, menuStyle }) {
  const MenuItem = ({ menuBox }) => <span className={`hollow-text`}>{menuBox}</span>;

  const menuTop = menus.map((menuBox, index) => (
    <div className={menuStyle} key={index}>
      {menuBox}
    </div>
  ));

  const menuLeft = menus.map((menuBox, index) => (
    <div className={menuStyle} key={index}>
      <MenuItem menuBox={menuBox} />
    </div>
  ));

  useEffect(() => {
    console.log(`Top updated: ${menuStyle === "button" ? menuTop : menuLeft}`);
  }, [menuStyle]);

  return (
    <>
      {/* <InfoPages
        menuTop={menuStyle.toLowerCase() === "top" ? menus : null}
        menuLeft={menuStyle.toLowerCase() === "left" ? menus : null}
      /> */}
<InfoPages menuTop={menuStyle.toLowerCase() === "top" ? menus : null} menuLeft={menuStyle.toLowerCase() === "left" ? menus : null} />
    </>
  );
}

export default TopMenus;
