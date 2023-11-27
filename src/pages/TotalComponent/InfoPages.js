import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function TopMenus({ menus, menuStyle }) {
  const navigate = useNavigate();
  const location = useLocation();


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
    <TopMenus
      menus={menus}
      menuStyle={menuStyle}
      onItemClick={(menuItem) => {
        if (menuStyle.toLowerCase() === "top") {
          onClickMenu(menuItem);
        } else if (menuStyle.toLowerCase() === "left") {
          onClickLeftMenu(menuItem);
        }
      }}
    />
  );
}

export default TopMenus;
