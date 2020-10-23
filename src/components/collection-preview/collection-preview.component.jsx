import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import Link from '../linknav/linknav.component'
import { useLocation } from 'react-router';

const PreviewCollection = ({ title, items, restrict, routeName }) => {
    const { pathname } = useLocation();
    const isActive = pathname.includes(routeName);
    return (
    <div className="collection-preview">
        <h1 className={`title ${isActive ? 'active' : ''}`}>{ !isActive ? <Link to={routeName} className="title-link">{title}</Link> : title }</h1>
        <div className="preview">
            {items
            .filter((item, idx) => restrict && typeof(restrict) == "number" && restrict !== 0 ? idx < 4 : idx)
            .map(item => <CollectionItem key={item.id} item={item} /> )}
        </div>
    </div>
    )
};

export default PreviewCollection;