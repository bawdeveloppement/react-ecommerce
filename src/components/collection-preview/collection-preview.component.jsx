import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const PreviewCollection = ({ title, items, restrict }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items
            .filter((item, idx) => restrict && typeof(restrict) == "number" ? idx < 4 : idx)
            .map(({ id, ...otherItemProps}) => <CollectionItem key={id} {...otherItemProps} /> )}
        </div>
    </div>
);

export default PreviewCollection;