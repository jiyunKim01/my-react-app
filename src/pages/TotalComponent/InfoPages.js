// ATOMS(1)
// InfoPages 컴포넌트

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";

function InfoPages({ menuTop, menuLeft, onMenuClick }) {
  const navigate = useNavigate();

  // Check if menuTop and menuLeft are not null before using .map()
  const menuTopItems = menuTop && menuTop.map((menuItem, index) => (
    <div key={index} onClick={() => {
      onMenuClick(menuItem);
      navigate(`../${menuItem}`);
    }} className={"button"}>
      {menuItem}
    </div>
  ));
  
  const menuLeftItems = menuLeft && menuLeft.map((menuItem, index) => (
    <div key={index} onClick={() => {
      onMenuClick(menuItem);
      navigate(`../${menuItem}`);
    }} className={"LeftHeader"}>
      {menuItem}
    </div>
  ));

  console.log(`topInfoPages: ${menuTop}`);
  console.log(`leftInfoPages: ${menuLeft}`);
  console.log(`click: ${menuTopItems}`);

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
