import React from "react";
import { Header, Footer } from "../components";

const MainLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
