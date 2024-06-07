import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CoinCard = () => {
    const [coin, setCoin] = useState(null);
    const { id } = useParams();
    console.log("id of coin = ", id);

    useEffect(() => {
        axios
        .get(`https://api.coincap.io/v2/assets/${id}`)
        .then((res) => setCoin(res.data));
    }, []);

    console.log(coin);
    return (
        <>
            <div>
                <table style={{ border: "1px solid gray", padding: "15px"}}>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Symbol</th>
                        <th>Volume</th>
                    </tr>
                    <tr>
                        <td>{coin?.data?.rank}</td>
                        <td>{coin?.data?.name}</td>
                        <td>{coin?.data?.priceUsd}</td>
                        <td>{coin?.data?.symbol}</td>
                        <td>{coin?.data?.volumeUsd24Hr}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default CoinCard;