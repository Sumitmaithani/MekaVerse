import React from "react";
import about from "../images/about.svg";
import icon1 from "../images/icon (1).svg";
import icon2 from "../images/icon (2).svg";
import icon3 from "../images/icon (3).svg";
import icon4 from "../images/icon (4).svg";
import icon5 from "../images/icon (7).svg";
import icon6 from "../images/icon (8).svg";
import { Card } from "antd";

const About = () => {
  const { Meta } = Card;
  return (
    <div className="about-container">
      <div>
        <img className="about-img" src={about} />
      </div>
      <div className="about-write">
        <h1 className="about-heading">Building an open digital economy</h1>
        <p className="about-content">
          At MekaVerse, we're excited about a brand new type of digital good
          called a non-fungible token, or NFT. NFTs have exciting new
          properties: they're unique, provably scarce, tradeable, and usable
          across multiple applications. Just like physical goods, you can do
          whatever you want with them! You could throw them in the trash, gift
          them to a friend across the world, or go sell them on an open
          marketplace. But unlike physical goods, they're armed with all the
          programmability of digital goods. A core part of our vision is that
          open protocols like Ethereum and interoperable standards like ERC-721
          and ERC-1155 will enable vibrant new economies. We're building tools
          that allow consumers to trade their items freely, creators to launch
          new digital works, and developers to build rich, integrated
          marketplaces for their digital items. We're proud to be the first and
          largest marketplace for NFTs.
        </p>
      </div>
      <div className="about-icon">
        <Card className="about-card" hoverable style={{ width: 90 }} cover={ <img className="about-icon-image" src={icon1} /> }>
          <Meta title="2017" description="Founded"/>
        </Card>
        <Card className="about-card" hoverable style={{ width: 90 }} cover={ <img className="about-icon-image" src={icon2} /> }>
          <Meta title="200+" description='Employees' />
        </Card>
        <Card className="about-card" hoverable style={{ width: 90 }} cover={ <img className="about-icon-image" src={icon3} /> }>
          <Meta title="600K+" description='Users' />
        </Card>
        <Card className="about-card" hoverable style={{ width: 90 }} cover={ <img className="about-icon-image" src={icon4} /> }>
          <Meta title="2M+" description='Collection' />
        </Card>
        <Card className="about-card" hoverable style={{ width: 90 }} cover={ <img className="about-icon-image" src={icon5} /> }>
          <Meta title="80M+" description='NFTs'/>
        </Card>
        <Card className="about-card" hoverable style={{ width: 90 }} cover={ <img className="about-icon-image" src={icon6} /> }>
          <Meta title="$20B+" description='Volume' />
        </Card>
      </div>
    </div>
  );
};

export default About;
