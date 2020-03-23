import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addToCart } from '../../redux-store/cart/cart.actions';

import Button from '../button/button';

import './collection-item.scss';

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button classes='inverse' onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func
};

export default connect(null, { addToCart })(CollectionItem);
