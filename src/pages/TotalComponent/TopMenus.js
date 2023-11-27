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

  const navigate = useNavigate();
  const location = useLocation();

  const menuTopItems = topInfoPage && topInfoPage.map((menuItem, index) => (
    <div key={index} onClick={() => onClickMenu(menuItem)} className={"button"}>
      {menuItem}
    </div>
  ));
  
  const menuLeftItems = leftInfoPage && leftInfoPage.map((menuItem, index) => (
    <div key={index} onClick={() => onClickLeftMenu(menuItem)} className={"LeftHeader"}>
      {menuItem}
    </div>
  ));

  const onClickMenu = (menuItem) => {
    console.log(`클릭: ${menuItem}`);
    navigate(`../${menuItem}`);
  };

  const onClickLeftMenu = (menuLeftItem) => {
    const menuTopItem = location.pathname.split('/')[1]; // URL에서 첫 번째 부분을 가져옴 (menuTopItem)
  
    let fullPath;
  
    switch (menuLeftItem) {
      case 'Design':
        fullPath = `../${menuTopItem}/Design`; // Design 페이지 경로
        break;
      case 'Profile':
        fullPath = `../${menuTopItem}/Profile`; // Profile 페이지 경로
        break;
      case 'Cost':
        fullPath = `../${menuTopItem}/Cost`; // Cost 페이지 경로
        break;
      default:
        console.error(`Unhandled left menu item: ${menuLeftItem}`);
        return;
    }
  
    console.log(`왼쪽 메뉴 클릭: ${fullPath}`);
    navigate(fullPath);
  };
  return (
    <>
      <MenuClick menuTop={menuTopItems} menuLeft={menuLeftItems} />
    </>
  );
}

export default TopMenus;
