import React from 'react';
import './product.css';

const Product = ({image,title,description,price}) => {
  return(
    <div className='product'>
      <img className='productImage' src={`/assets/${image}`} alt={image}/>
      <div className='productContent'>
        <h3 className='productTitle'>{title}</h3>
        <p className='productDescription'>{description}</p>
        <p className='productPrice'>{price}</p>
      </div>
    </div>
  )
}

export default Product;