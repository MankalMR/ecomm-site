import React from 'react';
import PropTypes from 'prop-types';

import CollectionItem from '../collection-item/collection-item';

import './collection.scss';

const filterItems = (items, previewCount) =>
  items.filter((id, index) => index < previewCount);

const renderItems = items =>
  items.map(item => <CollectionItem key={item.id} item={item} />);

const Collection = ({ title, items, preview }) => {
  const collectionMarkup = preview
    ? renderItems(filterItems(items, preview))
    : renderItems(items);
  return (
    <div className='collection'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>{collectionMarkup}</div>
    </div>
  );
};

Collection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  preview: PropTypes.number
};

export default Collection;
