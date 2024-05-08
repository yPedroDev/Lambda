import React from "react";
const MyNavbar = React.lazy(() => import("../navbar/Navbar"));

const Top = () => {
  return (
    <>
      <MyNavbar />
    </>
  );
};

export default Top;