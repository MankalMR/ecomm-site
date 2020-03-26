import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TileItem from '../tile-item/tile-item';
import './tile.scss';

const renderTileItems = categories => {
  return categories.map(({ id, ...tileItemListProps }) => (
    <TileItem key={id} {...tileItemListProps} />
  ));
};

const Tile = ({ categories }) => (
  <div className='tile'>{renderTileItems(categories)}</div>
);

const mapStateToProps = ({ categories }) => ({ categories });

Tile.propTypes = {
  categories: PropTypes.array
};

export default connect(mapStateToProps)(Tile);
