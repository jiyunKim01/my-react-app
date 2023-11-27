// // ATOMS(1)
// // InfoPages 컴포넌트

// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import TopEdit from "./TopEdit";
// import TopMenuAdd from "../PageComponent/TopMenuAdd";

// function InfoPages({ menuTop, menuLeft, onMenuClick }) {
//   const navigate = useNavigate();

//   // Check if menuTop and menuLeft are not null before using .map()
//   const menuTopItems = menuTop && menuTop.map((menuItem, index) => (
//     <div key={index} onClick={() => {
//       onMenuClick(menuItem);
//       navigate(`../${menuItem}`);
//     }} className={"button"}>
//       {menuItem}
//     </div>
//   ));
  
//   const menuLeftItems = menuLeft && menuLeft.map((menuItem, index) => (
//     <div key={index} onClick={() => {
//       onMenuClick(menuItem);
//       navigate(`../${menuItem}`);
//     }} className={"LeftHeader"}>
//       {menuItem}
//     </div>
//   ));

//   console.log(`topInfoPages: ${menuTop}`);
//   console.log(`leftInfoPages: ${menuLeft}`);
//   console.log(`click: ${menuTopItems}`);

//   return (
//     <>
//       {menuTopItems && (
//         <div className="TopHeader2">
//           {menuTopItems}
//           {TopMenuAdd()}
//         </div>
//       )}
//       {menuLeftItems && (
//         <div>
//           {menuLeftItems}
//         </div>
//       )}
//     </>
//   );
// }

// export default InfoPages;

import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function InfoPages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    // Example of using navigate with string interpolation
    navigate(`/Iphone/${category}/${id}`);
  };

  return (
    <div>
      <p>InfoPages Component</p>
      {/* Example of using Link component */}
      <Link to={`/Iphone/cost`}>Link to Cost</Link>
      <Link to={`/Iphone/design/${id}`}>Link to Design</Link>
      <Link to={`/Iphone/profile/${id}`}>Link to Profile</Link>

      <button onClick={() => handleNavigate("Cost")}>Navigate to Cost</button>
      <button onClick={() => handleNavigate("Design")}>Navigate to Design</button>
      <button onClick={() => handleNavigate("Profile")}>Navigate to Profile</button>
    </div>
  );
}

export default InfoPages;

