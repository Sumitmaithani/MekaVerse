import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "../src/App.css";
import {
  Exchanges,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetail,
  Navbar,
  Nft,
  NftDetails,
  About,
  Privacy,
  Contact,
  Gravity
} from "./components";
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route  path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/coins"
                element={<Cryptocurrencies />}
              />
              <Route  path="/coins/:id" element={<CryptoDetail />} />
              <Route  path="/news" element={<News />} />
              <Route  path="/assets" element={<Nft />} />
              <Route  path={"/asset/:address/:token_id"} element={<NftDetails />} />
              <Route  path="/about" element={<About />} />
              <Route  path="/privacy" element={<Privacy />} />
              <Route  path="/contact" element={<Contact />} />
              
              <Route  path="/bundles" element={<Gravity />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" style={{ backgroundColor: "#000"}}>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Mekaverse <br />
            All rights reserved 
            © Copyright 2022
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/coins">Cryptocurrencies</Link>
            <Link to="/exchanges">Analysis</Link>
            <Link to="/news">News</Link>
            <Link to="/assets">NFT marketplace</Link>
            <Link to="/coins">Gravity</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
