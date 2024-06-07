import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './screens/home/home';
import CoinCard from './screens/coin-card/Coin-card';
import './App.css';

// const CoinCard = ({ name, price, symbol }) => (
//   <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
//     <h3>{name}</h3>
//     <p>Price: {price}</p>
//   </div>
// );

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/coin/:id" element={<CoinCard />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
