//ATOMS(1)
//배열을 받아 클릭한 값을 전달함

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";

function InfoPages({ clickButton }) {
  const navigate = useNavigate();

  const onClickMenu = (clickButton) => {
    navigate(`../${clickButton}`);
  };

  console.log(`clickButton: ${clickButton}`);
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
