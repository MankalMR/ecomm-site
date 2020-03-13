import React from 'react';
import PropTypes from 'prop-types';

import './tile-item.scss';

const TileItem = ({ title, imageUrl, size }) => (
  <div className={`${size} tile-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

TileItem.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    size: PropTypes.string
}

export default TileItem;