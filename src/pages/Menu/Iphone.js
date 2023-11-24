import React from "react";
import HeartButton from "../PageComponent/HeartButton";
import "../css/HeartButtonStyle.css";
import Top from "../TotalComponent/Top";
import PageDesign from "../TotalComponent/PageDesign";
import LeftMenu from "../TotalComponent/LeftMenu"
import UiToggleSwitch from "../PageComponent/UiToggleSwitch"

function Iphone() {
  const myVariableValue = "IphoneImg";
  return (
    <>
      <Top />
      <LeftMenu />
      {/* <HeartButton /> */}
      {/* <PageDesign myVariable={myVariableValue} /> */}
      <PageDesign/>
      <UiToggleSwitch/>
      </>
  );
}

export default Iphone;
