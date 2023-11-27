import React from "react";
import HeartButton from "../PageComponent/HeartButton";
import "../css/HeartButtonStyle.css";
import Top from "../TotalComponent/Top";
import PageDesign from "../TotalComponent/PageDesign";
import LeftMenu from "../TotalComponent/LeftMenu"
import PhoneDesign from "../DesignComponent/IphoneDesign";

function Design() {
    return (
        <>
          <Top />
          <LeftMenu />
          <PageDesign/>
          {/* <PhoneDesign/> */}
          {/* <HeartButton /> */}
        </>
      );
}

export default Design;
