import React, { useState } from 'react';
import ShopData from './Shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { useLocation } from 'react-router';
import { useParams } from 'react-router';
import { Outlet } from 'react-router';
import ShopComponent from './Shop.component';

export default function ShopPage ({ target }) {
    // eslint-disable-next-line no-unused-vars
    const [collections, setCollections] = useState(ShopData);
    const { pathname } = useLocation();
    
    return pathname === '/shop' ? <ShopComponent restrict={4} /> : <Outlet/>
}