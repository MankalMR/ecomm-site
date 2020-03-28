import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Collection from '../../components/collection/collection';

import './category.scss';

const Category = ({ category }) => {
  return (
    <div className='category'>
      <Collection {...category} />
    </div>
  );
};

const mapStateToProps = (
  { products },
  {
    match: {
      params: { categoryName }
    }
  }
) => {
  return {
    category: products.find(product => product.routeName === categoryName)
  };
};

Category.propTypes = {
  category: PropTypes.object
};

export default connect(mapStateToProps)(Category);
