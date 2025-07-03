import React, { useEffect, useState } from "react";
import { RES_MENU } from "../contraints";

const useResMenuHook = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    const jsonData = await data.json();

    setResMenu(jsonData.data);
  };

  return resMenu;
};

export default useResMenuHook;
