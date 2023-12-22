import React, { useState } from 'react';
import './GoodGame.css';

function GoodGame() {
    const [id, setId] = useState(0);
    const [link, setLink] = useState("https://images.punkapi.com/v2/keg.png");
    const [title, setTitle] = useState("Buzz");
    const [tagline, setTagline] = useState("A Real Bitter Experience.");

    const search = () => {
        if (id > 0 && id < 26) {
            fetch(`https://api.punkapi.com/v2/beers/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        setTitle(data[0].name)
                        setLink(data[0].image_url)
                        setTagline(data[0].tagline)
                    } 
                })
                .catch((error) => {
                    alert("error")
                });
        } else {
            alert('Please enter an ID in the range of 1 to 25');
        }
    };

    return (
        <div className="main">
            <div className="search">
                <input
                    placeholder="Search ID from 1 to 25"
                    type="search"
                    accept="numbers"
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={search}>Search</button>
            </div>
            <div className='card'>
                <div className='title-container'>
                    <h2>{title}</h2>
                    <p>{tagline}</p>
                </div>
                <div className='image-container'>
                    <img src={link} alt='beerimage' />
                </div>
            </div>
        </div>
    );
}

export default GoodGame;
