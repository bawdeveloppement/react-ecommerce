import React from 'react';

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1>{title}</h1>
        <div className="preview">
            {items.map(item => <div key={item.id}>{item.name}</div> )}
        </div>
    </div>
);

export default PreviewCollection;