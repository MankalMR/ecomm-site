import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './collection-overview.scss';
import Collection from '../../components/collection/collection';

const CollectionOverview = ({ products, match }) => {
  return (
    <div className='collection-overview'>
      {products.map(({ id, ...otherCollectionProps }) => {
        return (
          <Collection
            key={id}
            relativePath={match.path}
            {...otherCollectionProps}
            preview={4}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ products }) => ({ products });

CollectionOverview.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object
};

export default connect(mapStateToProps)(CollectionOverview);
