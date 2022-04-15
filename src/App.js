import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              {/* <Route path='/exchanges' element={<Exchanges />} /> */}
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/news'>News</Link>
          </Space>
          <Typography.Title level={5} style={{ color: '#0071bd', textAlign: 'center' }}>
            <br/>
            By - Saubhagya Srivastava
          </Typography.Title>
        </div>
      </div>
    </div>
  );
}

export default App;
