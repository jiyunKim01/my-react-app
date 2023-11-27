
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";

function InfoPages({ menuTop, menuLeft }) {
  const [dynamicClass, setDynamicClass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const handleMenuClick = (menu) => {
    // 클릭한 메뉴에 따라 동적 클래스 설정
    setDynamicClass(`/${menu}(InfoPages)`);
  };

  const onClickMenu = (menuItem) => {
    console.log(`클릭: ${menuItem}`);
    navigate(`../${menuItem}`);
    // menuTopItems의 index를 MenuClick로 전달
    // 예: setSelectedTopIndex(index);
  };

  const onClickLeftMenu = (menuLeftItem) => {
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
      {menuTop && (
        <div className={`TopHeader2${dynamicClass}`}>
          {menuTop.map((menu, index) => (
            <span key={index} onClick={() => handleMenuClick(menu)}>
              {menu}
            </span>
          ))}
          {TopMenuAdd()}
        </div>
      )}
      {menuLeft && (
        <div>
          {menuLeft}
        </div>
      )}
    </>
  );
}

export default InfoPages;
