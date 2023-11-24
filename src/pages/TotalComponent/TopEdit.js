import React, { useState, useEffect } from "react";
import "../css/neuMorphismStyle.css";

function TopEdit() {
  return (
    <div>
      <input
        type="text"
        autoComplete="off"
        name="text"
        className="input2" // class 대신 className 사용
        placeholder="추가할 메뉴"
      />
    </div>
  );
}

export default TopEdit;
