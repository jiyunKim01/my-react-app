//MOLECOCES(2)
//top과 left, 각각 topInfoPage와 leftInfoPage에 넣어서 전달

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/TopMenuStyle.css";
import "../css/neuMorphismStyle.css";
import { motion } from "framer-motion";
import Logo from "../PageComponent/Logo";
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";
import MenuClick from "./MenuClick.js";
import "../css/neuMorphismStyle.css";

function TopMenus({ menus, menuStyle }) {
  const MenuItem = ({ menuBox }) => <span>{menuBox}</span>;

  const topInfoPage = menuStyle.toLowerCase() === "top" ? menus : null;
  const leftInfoPage = menuStyle.toLowerCase() === "left" ? menus : null;

  const menuTop = menus.map((menuBox, index) => (
    <div className={menuStyle} key={index}>
      {menuBox}
    </div>
  ));

  const menuLeft = menus.map((menuBox, index) => (
    <div className="hollow-text" key={index}>
      <MenuItem menuBox={menuBox} />
    </div>
  ));

  // useEffect(() => {
  //   console.log(`Top updated: ${menuStyle === "button" ? menuTop : menuLeft}`);
  // }, [menuStyle]);

  console.log(`TopMenus: ${topInfoPage}`);
  console.log(`LeftMenus: ${leftInfoPage}`);

  return (
    <>
      <MenuClick menuTop={topInfoPage} menuLeft={leftInfoPage} />
    </>
  );
}

export default TopMenus;
