import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Collection from '../../components/collection/collection';

const Shop = ({ products }) => (
  <div className='shop-page'>
    {products.map(({ id, ...otherCollectionProps }) => {
      return <Collection key={id} {...otherCollectionProps} preview={4} />;
    })}
  </div>
);

const mapStateToProps = ({ products }) => ({ products });

Shop.propTypes = {
  products: PropTypes.array
};

export default connect(mapStateToProps)(Shop);
