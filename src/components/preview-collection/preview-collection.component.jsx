import React from 'react';

const PreviewCollection = ({ title, items, restrict }) => (
    <div className="collection-preview">
        <h1>{title}</h1>
        <div className="preview">
            {items
            .filter((item, idx) => restrict && typeof(restrict) == "number" ? idx < 4 : idx)
            .map(item => <div key={item.id}>{item.name}</div> )}
        </div>
    </div>
);

export default PreviewCollection;