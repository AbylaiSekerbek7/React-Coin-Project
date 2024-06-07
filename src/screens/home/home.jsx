import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [cryptos, setCryptos] = useState([]);
    const [filteredCryptos, setFilteredCryptos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://api.coincap.io/v2/assets")
            .then((res) => {
                setCryptos(res.data.data);
                setFilteredCryptos(res.data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error(error);
            });
    }, []);

    const handleFilter = (criteria) => {
        let filtered = [...cryptos];

        switch (criteria) {
            case "name":
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "price":
                filtered.sort((a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
                break;
            default:
                break;
        }

        setFilteredCryptos(filtered);
    };

    return (
        <div>
            <h1>Crypto Coins</h1>
            <div>
                <button onClick={() => handleFilter("name")}>Sort by Name</button>
                <button onClick={() => handleFilter("price")}>Sort by Price</button>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column"}}>
                    {filteredCryptos.map((crypto) => (
                        <Link key={crypto.id} to={`coin/${crypto.id}`}>{crypto.name}</Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;