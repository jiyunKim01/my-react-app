import React from "react";
import HeartButton from "../PageComponent/HeartButton";
import "../css/HeartButtonStyle.css";
import Top from "../TotalComponent/Top";
import PageDesign from "../TotalComponent/PageDesign";
import LeftMenu from "../TotalComponent/LeftMenu"

function Profile() {
    return (
        <>
          <Top />
          <LeftMenu />
          <PageDesign/>
          <HeartButton />
        </>
      );
}

export default Profile;
