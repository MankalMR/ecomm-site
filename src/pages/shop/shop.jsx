import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import CollectionOverview from '../collection-overview/collection-overview';
import Category from '../category/category';

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:categoryName`}
          component={Category}
        />
      </Switch>
    </div>
  );
};

Shop.propTypes = {
  match: PropTypes.object
};

export default Shop;
