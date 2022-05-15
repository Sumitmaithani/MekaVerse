import React from "react";
import Loader from './Loader';
import { useParams } from "react-router-dom";
import { useGetNftCollectionsQuery } from "../services/openSeaApi";
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;


const NftDetails = () => {
  const { address } = useParams();
  const { token_id } = useParams();

  const { data: nftDetail, isFetching } = useGetNftCollectionsQuery({address,token_id});
  if(isFetching) return <Loader />

  return (
      <div>
    <div className="nft-container">
      <div className="nftImg">
        <img className="nft-main-img" src={nftDetail?.image_url} />
      </div>
      <div className="nft-content">
        <div className="nftTitle-content">
          <img
            className="nft-collection"
            src={nftDetail?.collection?.image_url}
          />
          <h1 className="nftTitle">{nftDetail?.name}</h1>
        </div>
        {/* <h3 className="nft-subTitle">{nftDetail?.collection?.slug}</h3> */}
        <p className="nft-desp">{nftDetail?.collection?.description}</p>
        <div className="nft-price">
          <h4>Price :</h4>
          <img
            className="nft-price-img"
            src={nftDetail?.collection?.payment_tokens[0]?.image_url}
          />
          <p className="nft-price">
            {nftDetail?.collection?.payment_tokens[0]?.eth_price}{" "}
            {nftDetail?.collection?.payment_tokens[0]?.symbol}
          </p>
        </div>
        <div className="nft-owner">
          <h4 className="nft-owner-heading">Creator : </h4>
          <img
            className="nft-owner-img"
            src={nftDetail?.creator?.profile_img_url}
          />
          <p className="nft-owner-name">{nftDetail?.creator?.user?.username}</p>
        </div>
        <a href={nftDetail?.permalink} target='_blank'>
        <button className="nft-buy-now">Buy now</button>
        </a>
      </div>

    </div>
    <div>
      <Title level={2} className="heading">NFT Stats</Title>
      <Row>
        <Col className="nft-col" span={12}><Statistic title="Average Price" value={nftDetail?.collection?.stats?.average_price} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Count" value={nftDetail?.collection?.stats?.count} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Floor Price" value={nftDetail?.collection?.stats?.floor_price} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Market Cap" value={nftDetail?.collection?.stats?.market_cap} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Number Of Owners" value={nftDetail?.collection?.stats?.num_owners} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Number Of Reports" value={nftDetail?.collection?.stats?.num_reports} /></Col>
        <Col className="nft-col" span={12}><Statistic title="One Day Average Price" value={nftDetail?.collection?.stats?.one_day_average_price} /></Col>

        <Col className="nft-col" span={12}><Statistic title="One Day Change" value={nftDetail?.collection?.stats?.one_day_change} /></Col>
        <Col className="nft-col" span={12}><Statistic title="One Day Sale" value={nftDetail?.collection?.stats?.one_day_sales} /></Col>
        <Col className="nft-col" span={12}><Statistic title="One Day Volume" value={nftDetail?.collection?.stats?.one_day_volume} /></Col>
        <Col className="nft-col" span={12}><Statistic title="7 Day Average" value={nftDetail?.collection?.stats?.seven_day_average_price} /></Col>
        <Col className="nft-col" span={12}><Statistic title="7 Day Change" value={nftDetail?.collection?.stats?.seven_day_change} /></Col>
        <Col className="nft-col" span={12}><Statistic title="7 Day Sale" value={nftDetail?.collection?.stats?.seven_day_sales} /></Col>
        <Col className="nft-col" span={12}><Statistic title="7 Day Volume" value={nftDetail?.collection?.stats?.seven_day_volume} /></Col>

        <Col className="nft-col" span={12}><Statistic title="30 Day Average Price" value={nftDetail?.collection?.stats?.thirty_day_average_price} /></Col>
        <Col className="nft-col" span={12}><Statistic title="30 Day Change" value={nftDetail?.collection?.stats?.thirty_day_change} /></Col>
        <Col className="nft-col" span={12}><Statistic title="30 Day Sales" value={nftDetail?.collection?.stats?.thirty_day_sales} /></Col>
        <Col className="nft-col" span={12}><Statistic title="30 Day Volume" value={nftDetail?.collection?.stats?.thirty_day_volume} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Total Sale" value={nftDetail?.collection?.stats?.total_sales} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Total Supply" value={nftDetail?.collection?.stats?.total_supply} /></Col>
        <Col className="nft-col" span={12}><Statistic title="Total Volume" value={nftDetail?.collection?.stats?.total_volume} /></Col>

      </Row>
    </div>
    </div>
  );
};

export default NftDetails;
