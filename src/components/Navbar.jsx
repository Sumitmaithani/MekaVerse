import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  RadarChartOutlined,
  DribbbleOutlined,
  QuestionCircleFilled,
  DatabaseFilled,
} from "@ant-design/icons";
import logo from "../images/logo2.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container" >
      <div className="logo-container">
        <Avatar src={logo} size="large" style={{ display: "flex", flexDirection: 'column', alignItem: 'center'}}/>
        <Typography.Title level={2} className="logo"><Link to="/">MekaVerse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined style={{ display: 'flex',  }} /></Button>
      </div>
      {activeMenu && (
      <Menu style={{ backgroundColor: "#001E6C", color: "white"}}>
        <p style={{ color: "grey", marginLeft:"20px" }}>
         Web 3.0
        </p>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/" style={{ color: "#fff" }}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/coins" style={{ color: "#fff"}}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news" style={{ color: "#fff"}}>News</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges" style={{ color: "#fff"}}>Analysis</Link>
        </Menu.Item>
        

        <p style={{ color: "grey", marginLeft:"20px", marginTop:"29px" }}>
        NFT
        </p>
        <Menu.Item icon={<DribbbleOutlined />}>
          <Link to={'/bundles'} style={{ color: "#fff"}}>NFT</Link>
        </Menu.Item>
        <Menu.Item icon={<RadarChartOutlined />}>
          <Link to="/assets" style={{ color: "#fff"}}>NFT marketplace</Link>
        </Menu.Item>
        <p style={{ color: "grey", marginLeft:"20px", marginTop:"29px" }}>
        Company
        </p>
        <Menu.Item icon={<QuestionCircleFilled />}>
          <Link to="/about" style={{ color: "#fff"}}>About Us</Link>
        </Menu.Item>
        <Menu.Item icon={<DatabaseFilled />}>
          <Link to={'/contact'} style={{ color: "#fff"}}>Contact Us</Link>
        </Menu.Item>
        <Menu.Item icon={<DatabaseFilled />}>
          <Link to={'/privacy'} style={{ color: "#fff"}}>Privacy Policy</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
