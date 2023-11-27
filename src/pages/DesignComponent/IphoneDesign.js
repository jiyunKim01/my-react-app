import React from "react";
import "../css/PhoneDesign.css"; // 스타일 파일을 import해야 합니다.

function PhoneDesign() {
  return (
    <div className="page-design-container">
    <div className="flip-card" >
      <div className="flip-card-inner">
        {/* <div className="flip-card-front"> */}
          {/* <p className="card-int">MASTERCARD</p> */}
          {/* <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 48 48"
          > */}
            {/* 이하 생략 */}
          {/* </svg> */}
          {/* <svg
            version="1.1"
            className="chip"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 50 50"
          > */}
            {/* 이하 생략 */}
          {/* </svg> */}
          {/* <svg
            version="1.1"
            className="contactless"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 50 50"
          > */}
          {/* <div class="card"> */} 얘 없애면 주변 줄이 없어짐
  
  <div class="btn1"></div>
  <div class="btn2"></div>
  <div class="btn3"></div>
  <div class="btn4"></div>
  <div class="card-int">
    <div class="hello">Hello
      <span class="hidden">uiverse</span>
    </div>
  </div>
  <div class="top">
    <div class="camera">
      <div class="int"></div>
    </div>
    <div class="speaker"></div>
  </div>
</div>
          {/* </svg> */}
        </div>
        <div className="flip-card-back">
          <div className="strip"></div>
          <div className="mstrip"></div>
          <div className="sstrip">
            <p className="code">***</p>
          {/* </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default PhoneDesign;
