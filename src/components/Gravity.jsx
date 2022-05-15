import React, { Component, useState, useEffect } from "react";
import { useGetBundlesQuery } from "../services/openSeaApi";
import Slider from "react-slick";
import Loader from "./Loader";
import { Card } from "antd";
import { Input } from "antd";

const { Meta } = Card;

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 400,
  cssEase: "linear",
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Gravity = () => {
  const { data, isFetching } = useGetBundlesQuery();
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const bundle = data?.bundles;

  useEffect(() => {
    setCryptos(bundle);

    const filteredData = bundle?.filter((item) =>
      item?.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div className="gravity-slides">
      <div className="search-crypto">
        <Input
          placeholder="Search NFT"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>

      {cryptos?.map((i) => (
        <div className="gravity-show">
          <h1>{i?.name}</h1>
          <Slider {...settings}>
            <div className="gravity-card">
              <a href={i?.permalink} target="_blank">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img src={i?.assets[0]?.image_url} />}
                >
                  <Meta
                    title={i?.assets[0]?.name}
                    description={i?.assets[0]?.description?.substring(0, 50)}
                  />
                </Card>
              </a>
            </div>
            <div className="gravity-card">
              <a href={i?.permalink} target="_blank">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={i?.assets[1]?.image_url || i?.assets[0]?.image_url}
                    />
                  }
                >
                  <Meta
                    title={i?.assets[1]?.name || i?.assets[0]?.name}
                    description={
                      i?.assets[1]?.description?.substring(0, 50) ||
                      i?.assets[0]?.description?.substring(0, 50)
                    }
                  />
                </Card>
              </a>
            </div>
            <div className="gravity-card">
              <a href={i?.permalink} target="_blank">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={i?.assets[2]?.image_url || i?.assets[0]?.image_url}
                    />
                  }
                >
                  <Meta
                    title={i?.assets[2]?.name || i?.assets[0]?.name}
                    description={
                      i?.assets[2]?.description?.substring(0, 50) ||
                      i?.assets[0]?.description?.substring(0, 50)
                    }
                  />
                </Card>
              </a>
            </div>
            <div className="gravity-card">
              <a href={i?.permalink} target="_blank">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={i?.assets[3]?.image_url || i?.assets[0]?.image_url}
                    />
                  }
                >
                  <Meta
                    title={i?.assets[3]?.name || i?.assets[0]?.name}
                    description={
                      i?.assets[3]?.description?.substring(0, 50) ||
                      i?.assets[0]?.description?.substring(0, 50)
                    }
                  />
                </Card>
              </a>
            </div>
            <div className="gravity-card">
              <a href={i?.permalink} target="_blank">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={i?.assets[4]?.image_url || i?.assets[0]?.image_url}
                    />
                  }
                >
                  <Meta
                    title={i?.assets[4]?.name || i?.assets[0]?.name}
                    description={
                      i?.assets[4]?.description?.substring(0, 50) ||
                      i?.assets[0]?.description?.substring(0, 50)
                    }
                  />
                </Card>
              </a>
            </div>
            <div className="gravity-card">
              <a href={i?.permalink} target="_blank">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={i?.assets[5]?.image_url || i?.assets[0]?.image_url}
                    />
                  }
                >
                  <Meta
                    title={i?.assets[5]?.name || i?.assets[0]?.name}
                    description={
                      i?.assets[5]?.description?.substring(0, 50) ||
                      i?.assets[0]?.description?.substring(0, 50)
                    }
                  />
                </Card>
              </a>
            </div>
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default Gravity;
