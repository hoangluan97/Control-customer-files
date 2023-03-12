import { Button, Popconfirm, Popover } from "antd";
import Input from "antd/es/input/Input";
import { ColumnsType } from "antd/es/table";
import { Tables } from "components/table/Tables";
import { Data } from "interface/data";
import { getDataProxy } from "proxy/data";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import loinIcon from "../../assets/login.svg";
import logoIcon from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const popoverContent = (
    <>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </span>
    </>
  );
  return (
    <div className="home-page-header">
      <div className="home-page-img">
        <img className="home-page-logo" src={logoIcon} alt="" />
      </div>
      <div className="home-page-navigate">
        <span className="home-page-active">Home</span>
        <span className="home-page-link">Data</span>
        <Popover content={popoverContent} placement="bottom" title={null}>
          <img src={loinIcon} alt="" />
        </Popover>
      </div>
    </div>
  );
};

export default Header;
