import React from "react";
import ShoppingHeder from "./header";
import { Outlet } from "react-router-dom";

const ShoppingLayout = () => {
  return (
    <div>
      {/* common header */}
      <ShoppingHeder />
      {/* child componensts */}
      <Outlet />
    </div>
  );
};

export default ShoppingLayout;
