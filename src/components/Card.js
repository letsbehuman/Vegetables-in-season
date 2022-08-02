import React from 'react';

const Card = ({ name, type, season: seasons }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="Veggie"
        src={require(`../../public/vegetables/${name}.png`)}
        height={150}
      />
      <div>
        <h2>{name}</h2>
        <h4>Type:</h4>
        <p>{type}</p>
        <h4>Season:</h4>
        <p className="mw5">
          {seasons.map((season, i) => (i === 0 ? season : `-${season}`))}
        </p>
      </div>
    </div>
  );
};

export default Card;
