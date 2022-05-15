import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS } from 'chart.js/auto';

const { Title } = Typography;

const LineChartjs = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.prices?.length; i += 1) {
    coinPrice?.push(coinHistory?.prices?.[i]);
  }

  for (let i = 0; i < coinHistory?.prices?.length; i += 1) {
    coinTimestamp?.push(new Date(coinHistory?.prices?.[i][1])?.toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

const options = {
    elements: {
    point:{
    radius: 0
    }
    },
    scales: {
    yAxes: [
    {
    ticks: {
    beginAtZero: true,
    },
    },
    ],
    },
    };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          {/* <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title> */}
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChartjs;