import React, { useState, useEffect } from "react";

function MenuClick(){

    const [clickLeftMenu, setClickLeftMenu] = useState(null);

    useEffect(() => {
      const currentMenu = location.pathname.split("/").pop();
      setClickLeftMenu(currentMenu);
    }, [location.pathname]);
  
    const handleMenuClick = (menuBox) => {
      setClickLeftMenu((prevMenu) => (prevMenu === menuBox ? null : menuBox));
  
      if (clickLeftMenu === menuBox) {
        navigate("../");
      } else {
        navigate(`../${menuBox}`);
      }
    };
    
    return{};
}

export default MenuClick;