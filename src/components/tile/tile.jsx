import React from 'react';

import TileItem from '../tile-item/tile-item';
import TILE_DATA from './tile.data';
import './tile.scss';

class Tile extends React.Component {
  constructor() {
    super();

    this.state = {
      tileItemList: TILE_DATA
    };
  }

  renderTileItems() {
    return this.state.tileItemList.map(({ id, ...tileItemListProps }) =>
        <TileItem key={id} { ...tileItemListProps } />
    );
  }

  render() {
    return (
      <div className='tile'>
        { this.renderTileItems() }
      </div>
    );
  }
}

export default Tile;