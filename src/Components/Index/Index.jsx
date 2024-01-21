import React from 'react';
import './Index.css'
const Index = () => {
    let categories = [
    {
        title:"Mens",
        image:"images/mens.png"
    },
    {
        title:"Womens",
        image: "images/womens.png"
    },
    {
        title:"Kids",
        image: "images/kids.png"
    }
]
    return (
      <div className="banner-section-container">
        <div className="banner-container">
          <div className="banner-section">
            <h1 className="banner-text-h1">
              Discover the latest fashion trends and top quality clothing items
            </h1>
            <p>Shop by style , brand or items on sale</p>
            <div></div>
            <div className="banner-search-container">
              <input
                className="banner-search-input"
                placeholder="Find your perfect style"
              />
              <svg
                width="40"
                height="40"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_18_5)">
                  <path
                    d="M62 56H58.84L57.72 54.92C61.64 50.36 64 44.44 64 38C64 23.64 52.36 12 38 12C23.64 12 12 23.64 12 38C12 52.36 23.64 64 38 64C44.44 64 50.36 61.64 54.92 57.72L56 58.84V62L76 81.96L81.96 76L62 56ZM38 56C28.04 56 20 47.96 20 38C20 28.04 28.04 20 38 20C47.96 20 56 28.04 56 38C56 47.96 47.96 56 38 56Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_5">
                    <rect width="96" height="96" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <button className="banner-search-btn">Search</button>
            </div>
          </div>
          <div>
            <img className="banner-image" src="images/banner-image.jpg" />
          </div>
        </div>
          <p className="cat-text">Categories</p>
        <div className="home-container">
          {categories.map((cat) => (
            <div className="categories-card" key={cat.id}>
              <p className="categories-title">{cat.title}</p>
              <img
                className='cat-image'
                src={cat.image}
                alt={cat.title} // add alt attribute for accessibility
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Index;
