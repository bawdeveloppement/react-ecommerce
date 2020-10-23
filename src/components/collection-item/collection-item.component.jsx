import React from 'react'
import './collection-item.styles.scss';

import FormButton from '../forms/button/FormButton.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/Cart.actions';

const CollectionItem = ({item}) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();

    return <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <FormButton isInverted onClick={() => dispatch(addItemToCart(item))}>ADD TO CART</FormButton>
    </div>
}

export default CollectionItem