import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/TopMenuStyle.css";
import "../css/neuMorphismStyle.css";
import MenuClick from "./MenuClick.js";
import "../css/neuMorphismStyle.css";

function TopMenus({ menus, menuStyle }) {

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const topInfoPage = menuStyle.toLowerCase() === "top" ? menus : null;
  const leftInfoPage = menuStyle.toLowerCase() === "left" ? menus : null;

  const navigate = useNavigate();
  const location = useLocation();


  const menuTopItems = topInfoPage && topInfoPage.map((menuItem, index) => (
    <div onClick={() => {
      onClickMenu(menuItem, index);
      setSelectedMenuIndex(index); // 클릭한 메뉴의 인덱스를 저장
      console.log(`menuTopItems 클릭: ${index}`);
    }}>
      <div
        key={index}
        className={`button ${selectedMenuIndex === index ? 'selected' : ''}`}>
        {menuItem}
      </div>
    </div>
  ));

  const menuLeftItems = leftInfoPage && leftInfoPage.map((menuItem, index) => (
    <div onClick={() => {
      onClickLeftMenu(menuItem, index);
      setSelectedMenuIndex(index); // 클릭한 메뉴의 인덱스를 저장
      console.log(`menuLeftItems 클릭: ${index}`);
    }}>
      <div
        key={index}
        className={`LeftHeader ${selectedMenuIndex === index ? 'selected' : ''}`}>
        {menuItem}
      </div>
    </div>
  ));

  const onClickMenu = (menuItem, index) => {
    console.log(`클릭: ${menuItem}`);
    navigate(`../${menuItem}`);
    // menuTopItems의 index를 MenuClick로 전달
    // 예: setSelectedTopIndex(index);
  };

  const onClickLeftMenu = (menuLeftItem, index) => {
    const menuTopItem = location.pathname.split('/')[1];

    let fullPath;

    switch (menuLeftItem) {
      case 'Design':
        fullPath = `../${menuTopItem}/Design`;
        break;
      case 'Profile':
        fullPath = `../${menuTopItem}/Profile`;
        break;
      case 'Cost':
        fullPath = `../${menuTopItem}/Cost`;
        break;
      default:
        console.error(`Unhandled left menu item: ${menuLeftItem}`);
        return;
    }

    console.log(`왼쪽 메뉴 클릭: ${fullPath}`);
    navigate(fullPath);
    // menuLeftItems의 index를 MenuClick로 전달
    // 예: setSelectedLeftIndex(index);
  };

  return (
    <>
      <MenuClick menuTop={menuTopItems} menuLeft={menuLeftItems} />
    </>
  );
}

export default TopMenus;
