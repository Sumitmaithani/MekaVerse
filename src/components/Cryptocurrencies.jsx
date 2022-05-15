
import React, { useState, useEffect } from "react";
import millify from "millify";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { Col, Row, Card, Input } from "antd";
import { useGetCoinsQuery } from "../services/coins";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCoinsQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList);

    const filteredData = cryptosList?.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;
  
  return (
    <>
    {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
    <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos && cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/coins/${currency?.id}`}>
              <Card
                title={`${currency?.market_cap_rank}. ${currency?.name}`}
                extra={<img className="crypto-image" src={currency?.image} />}
                hoverable
              >
                 <p>Price: {millify(currency?.current_price)}</p>
                <p>Market Cap: {millify(currency?.market_cap)}</p>
                <p>Daily Change: {currency?.price_change_percentage_24h}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
