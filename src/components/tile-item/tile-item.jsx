import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './tile-item.scss';

const TileItem = ({ title, imageUrl, size, history }) => (
  <div className={`${size} tile-item`} onClick={ () => history.push(`/shop/${title}`)}>
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
    size: PropTypes.string,
    history: PropTypes.object
}

export default withRouter(TileItem);