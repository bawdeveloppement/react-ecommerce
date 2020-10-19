import React, { useState } from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

const ShopPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [collections, setCollections] = useState(ShopData);
    
    return <div className="shop-page">
        {
            collections.map(({id, ...collectionProps}) => (
                <CollectionPreview  key={id} {...collectionProps} />
            ))
        }
    </div>
}

export default ShopPage;