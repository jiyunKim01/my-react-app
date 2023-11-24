import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";

function InfoPages({ menuTop, menuLeft }) {
  const navigate = useNavigate();

  const onClickMenu = (menuItem) => {
    navigate(`../${menuItem}`);
  };

  console.log(`Top updatedInfo!!!: ${menuTop}`);
  console.log(`Left updatedInfo!!!: ${menuLeft}`);
  

  return (
    <>
      {menuTop && (
        <div className="TopHeader2">
          {menuTop.map((menuItem, index) => (
            <div key={index} onClick={() => onClickMenu(menuItem)} className={"button"}
            >
              {menuItem}
            </div>
          ))}
          {TopMenuAdd()}
        </div>
      )}
      {menuLeft && (
        <div>
          {menuLeft.map((menuItem, index) => (
            <div key={index} onClick={() => onClickMenu(menuItem)} className={"LeftHeader"}>
              {menuItem}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default InfoPages;
