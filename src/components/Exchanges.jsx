import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Table } from "antd";
import HTMLReactParser from "html-react-parser";

//import { useGetExchangesQuery } from '../services/cryptoExchangesApi';
import {
  useGetExchangesQuery,
  useGetTopByFollowersQuery,
  useGetTopBySentimentQuery,
} from "../services/cryptoExchangesApi";
import Loader from "./Loader";
import Title from "antd/lib/skeleton/Title";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: top, isFetching } = useGetExchangesQuery();
  const { data: topByFollowers } = useGetTopByFollowersQuery();
  const { data: topBySentiments } = useGetTopBySentimentQuery();
  //const exchangesList = data?.data;
  if (isFetching) return <Loader />;

  return (
    <>
    <h1 style={{ fontSize: '40px' }}> Social Media Analysis</h1>
        
      <h1 style={{ color: "blue", fontSize: "30px" }}>
        {" "}
        Top 10 Coins By Mentions :
      </h1>
      <Row>
        <Col span={6}>
          <h3>Rank</h3>
        </Col>
        <Col span={6}>
          <h3>Coin Name</h3>
        </Col>
        <Col span={6}>
          <h3>Symbol</h3>
        </Col>
        <Col span={6}>
          <h3>Mentions</h3>
        </Col>
      </Row>
      {top && top.map((i) => (
        <Row>
          <Col span={6} key={i.uuid}>
            {i.Rank}
          </Col>
          <Col span={6} key={i.uuid}>
            {i.CoinName}
          </Col>
          <Col span={6} key={i.uuid}>
            {i.CoinTicker}
          </Col>
          <Col span={6} key={i.uuid}>
            {millify(i?.Value)}
          </Col>
        </Row>
      ))}
        <br />
        <br />
        <hr />
        <br />
        <br />
      <h1 style={{ color: "blue", fontSize: "30px" }}>
        {" "}
        Top 10 Coins By Followers :
      </h1>
      <Row>
        <Col span={6}>
          <h3>Rank</h3>
        </Col>
        <Col span={6}>
          <h3>Coin Name</h3>
        </Col>
        <Col span={6}>
          <h3>Symbol</h3>
        </Col>
        <Col span={6}>
          <h3>Followers</h3>
        </Col>
      </Row>
      {topByFollowers && topByFollowers.map((i) => (
        <Row>
          <Col span={6} key={i.uuid}>
            {i.Rank}
          </Col>
          <Col span={6} key={i.uuid}>
            {i.CoinName}
          </Col>
          <Col span={6} key={i.uuid}>
            {i.CoinTicker}
          </Col>
          <Col span={6} key={i.uuid}>
            {millify(i.Value)}
          </Col>
        </Row>
      ))}
      <br />
        <br />
        <hr />
        <br />
        <br />
      <h1 style={{ color: "blue", fontSize: "30px" }}>
        {" "}
        Top 10 Coins By Sentiments :
      </h1>
      <Row>
        <Col span={6}>
          <h3>Rank</h3>
        </Col>
        <Col span={6}>
          <h3>Coin Name</h3>
        </Col>
        <Col span={6}>
          <h3>Symbol</h3>
        </Col>
        <Col span={6}>
          <h3>Sentiments</h3>
        </Col>
      </Row>
      {topBySentiments && topBySentiments.map((i) => (
        <Row>
          <Col span={6} key={i.uuid}>
            {i.Rank}
          </Col>
          <Col span={6} key={i.uuid}>
            {i.CoinName}
          </Col>
          <Col span={6} key={i.uuid}>
            {i.CoinTicker}
          </Col>
          <Col span={6} key={i.uuid}>
            {millify(i.Value)}
          </Col>
        </Row>
      ))}
      <br />
      <br />
    </>
  );
};

export default Exchanges;
