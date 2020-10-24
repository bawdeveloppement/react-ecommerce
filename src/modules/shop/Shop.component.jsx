import React, { useState } from 'react';
import ShopData from './Shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { useLocation } from 'react-router';
import { useParams } from 'react-router';

export default function ShopComponent ({ restrict }) {
    // eslint-disable-next-line no-unused-vars
    const [notFound, setNotFound] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [collections, setCollections] = useState(ShopData);
    const { category } = useParams();

    return <>
        { notFound !== null && typeof(notFound) === "string" ? <div>Not found</div> : null } 
        {
            collections
            .filter(
                (collection) => (
                    category !== null && typeof(category) !== "undefined" ? collection.routeName === category ? collection : null : collection 
                )
            )
            .map(({id, ...collectionProps}) => (
                <CollectionPreview restrict={restrict} key={id} {...collectionProps} />
            ))
        }
    </>
}