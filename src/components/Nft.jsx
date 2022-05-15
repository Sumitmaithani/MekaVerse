import React, {useState, useEffect}  from "react";
import { useGetNftQuery } from "../services/openSeaApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import Loader from "./Loader";

const Nft = () => {
  const { data: nftList, isFetching } = useGetNftQuery();
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const nft = nftList?.assets;

  useEffect(() => {
    setCryptos(nft);

    const filteredData = nft?.filter((item) => item?.name?.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [nft, searchTerm]);

  if (isFetching) return <Loader />;
  
  return (
    <div>
      <div className="search-crypto">
          <Input
            placeholder="Search NFT's"
            onChange={(e) => setSearchTerm(e.target.value?.toLowerCase())}
          />
        </div>


      <Row gutter={[32, 32]} className="nft-container">
        {cryptos && cryptos?.map((i) => (
          <Col xs={16} sm={12} lg={6} className="crypto-card" key={i.uuid}>
            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={i.uuid} to={`/asset/${i?.asset_contract?.address}/${i?.token_id}`}>
              <Card
                style={{ height: 500 }}
                cover={<img className="nft-image" src={i?.image_url || i?.image_preview_url} />}
                hoverable
              >
                <h2>{i?.name && i?.name?.substring(0, 30)}</h2>
                <p>
                  <b>Owned by</b> {i?.asset_contract?.name || "unknown"}
                </p>
                <p>
                  <b>Created Date : </b>
                  {i?.asset_contract.created_date && i?.asset_contract?.created_date?.substring(0, 10)}
                </p>
                <hr />
                <div className="buy-now-container">
                  <p className="buy-now">
                    <ShoppingOutlined />
                    <b> Buy now</b>
                  </p>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Nft;
