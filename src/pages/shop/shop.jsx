import React from 'react';

import SHOP_DATA from './shop.data';
import Collection from '../../components/collection/collection';

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <Collection key={id} {...otherCollectionProps} preview={ 4 } />
            })}
        </div>);
    }
}

export default Shop;