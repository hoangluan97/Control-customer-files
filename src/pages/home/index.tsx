import Main from "components/home/body";
import Header from "components/home/header";
import React from "react";
import "./style.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-page-container">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
