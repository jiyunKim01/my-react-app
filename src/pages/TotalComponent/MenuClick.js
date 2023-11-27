// ATOM(1)
// 

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TopEdit from "./TopEdit";
import TopMenuAdd from "../PageComponent/TopMenuAdd";

function InfoPages({ menuTop, menuLeft }) {

  return (
    <>
      {menuTop && (
        <div className="TopHeader2">
          {menuTop}
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
