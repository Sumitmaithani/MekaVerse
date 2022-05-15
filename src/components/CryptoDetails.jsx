import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useLocation, useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
//import LineChart from "./LineChart";
import { useGetCoinsDetailsQuery, useGetCoinsHistoryQuery } from "../services/coins";
//import { useGetCoinsDetailsQuery } from "../services/coins";
import Loader from "./Loader";
//import { CryptoDetails } from ".";
import LineChartjs from './LineChartjs';

const { Title, Text } = Typography;
const { Options } = Select;

const CryptoDetail = () => {
  const { id } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCoinsDetailsQuery(id);
  const { data: coinHistory } = useGetCoinsHistoryQuery({ id, timeperiod });
  const cryptoDetails = data;

  
  if(isFetching) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.market_data?.current_price?.usd && millify(cryptoDetails?.market_data?.current_price?.usd)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.coingecko_rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.market_data?.total_volume?.usd && millify(cryptoDetails?.market_data?.total_volume?.usd)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.market_data?.market_cap?.usd && millify(cryptoDetails?.market_data?.market_cap?.usd)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.market_data?.high_24h?.usd && millify(cryptoDetails?.market_data?.high_24h?.usd)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Price Change in 1h', value: `${cryptoDetails?.market_data.price_change_percentage_1h_in_currency.usd && millify(cryptoDetails?.market_data.price_change_percentage_1h_in_currency.usd)}%`, icon: <FundOutlined /> },
    { title: 'Price Change in 24h', value: ` ${cryptoDetails?.market_data.price_change_percentage_24h_in_currency.usd && millify(cryptoDetails?.market_data.price_change_percentage_24h_in_currency.usd)}%`, icon: <ExclamationCircleOutlined /> },
    { title: 'Price Change in 7d', value: `${cryptoDetails?.market_data.price_change_percentage_7d_in_currency.usd && millify(cryptoDetails?.market_data.price_change_percentage_7d_in_currency.usd)}%` , icon: <MoneyCollectOutlined /> },
    { title: 'Price Change in 14d', value: `${cryptoDetails?.market_data.price_change_percentage_14d_in_currency.usd && millify(cryptoDetails?.market_data.price_change_percentage_14d_in_currency.usd)}%` , icon: <ExclamationCircleOutlined /> },
    { title: 'Price Change in 30d', value: ` ${cryptoDetails?.market_data.price_change_percentage_30d_in_currency.usd && millify(cryptoDetails?.market_data.price_change_percentage_30d_in_currency.usd)}%`, icon: <ExclamationCircleOutlined /> },
  ];
  

  return (
    <>
    <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {data?.name} ({data?.symbol}) Price
        </Title>
        <p>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </Col>
      <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)}>
        {time && time.map((date, Option) => <Option key={date}>{date}</Option>)}
      </Select>
       <LineChartjs coinHistory={coinHistory} currentPrice={(millify(cryptoDetails?.market_data?.current_price?.usd))} coinName={cryptoDetails?.name} /> 
       {/* <LineChart /> */}
       <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">{cryptoDetails?.name} Value Statistics</Title>
            <p>An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </Col>
          {stats && stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className="other-stats-info">
           <Col className="coin-value-statistics-heading">
             <Title level={3} className="coin-details-heading">Other Stats Info</Title>
             <p>An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</p>
           </Col>
           {genericStats && genericStats.map(({ icon, title, value }) => (
             <Col className="coin-stats">
               <Col className="coin-stats-name">
                 <Text>{icon}</Text>
                 <Text>{title}</Text>
               </Col>
               <Text className="stats">{value}</Text>
             </Col>
           ))}
         </Col>
        </Col>
       <Col className="coin-desc-link">
         <Row className="coin-desc">
           <Title level={3} className="coin-details-heading">What is {cryptoDetails?.name}?</Title>
           
           {HTMLReactParser(`${cryptoDetails?.description.en}`)}
         </Row>
         <Col className="coin-links">
           {/* <Title level={3} className="coin-details-heading">{cryptoDetails?.description?.en} Links</Title> */}
           {cryptoDetails && cryptoDetails?.links?.blockchain_site?.map((link) => (
             <Row className="coin-link" key={link?.blockchain_site}>
               <Title level={5} className="link-name">{link?.type}</Title>
               <a href={link} target="_blank" rel="noreferrer">{link?.substring(0,45)}</a>
             </Row>
           ))}
         </Col>
       </Col>
    </>

  );
           }
export default CryptoDetail;


