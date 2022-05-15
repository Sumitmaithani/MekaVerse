import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
//import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCoinsGlobalQuery } from '../services/coins';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCoinsGlobalQuery(10);
  const globalStats = data;

  if(isFetching) return <Loader />;
  
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.data?.active_cryptocurrencies} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.data?.markets)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap Btc:" value={millify(globalStats?.data.total_market_cap.btc)} /></Col>
        <Col span={12}><Statistic title="Market Cap Change In 24h" value={millify(globalStats?.data.market_cap_change_percentage_24h_usd)} /></Col>
        <Col span={12}><Statistic title="Total Volume Of Btc" value={millify(globalStats?.data.total_volume.btc)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to='/coins'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage