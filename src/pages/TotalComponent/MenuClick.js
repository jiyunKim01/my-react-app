import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";

function InfoPages({ menuTop, menuLeft }) {
  const navigate = useNavigate();

  // Check if menuTop and menuLeft are not null before using .map()
  const menuTopItems = menuTop && menuTop.map((menuItem, index) => (
    <div key={index} onClick={() => onClickMenu(menuItem)} className={"button"}>
      {menuItem}
    </div>
  ));
  
  const menuLeftItems = menuLeft && menuLeft.map((menuItem, index) => (
    <div key={index} onClick={() => onClickMenu(menuItem)} className={"LeftHeader"}>
      {menuItem}
    </div>
  ));

  const onClickMenu = (menuItem) => {
    console.log(`click: ${menuItem}`); // 클릭한 값 콘솔 출력
    navigate(`../${menuItem}`);
  };
  
  
  console.log(`topInfoPages: ${menuTop}`);
  console.log(`leftInfoPages: ${menuLeft}`);
  console.log(`click: ${menuTopItems}`); // 이 부분 수정

  return (
    <>
      {menuTopItems && (
        <div className="TopHeader2">
          {menuTopItems}
          {TopMenuAdd()}
        </div>
      )}
      {menuLeftItems && (
        <div>
          {menuLeftItems}
        </div>
      )}
    </>
  );
}

export default InfoPages;
