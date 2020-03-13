import React from 'react';

import TileItem from '../tile-item/tile-item';

import './tile.scss';

class Tile extends React.Component {
  constructor() {
    super();

    this.state = {
      tileItemList: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  renderTileItems() {
    return this.state.tileItemList.map(({ title, imageUrl, id, size }) =>
        <TileItem key={id} title={title} imageUrl={imageUrl} size={size} />
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