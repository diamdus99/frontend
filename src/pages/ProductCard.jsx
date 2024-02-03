// components/ProductCard.js
import React from 'react';
import styles from './ProductCard.module.css'; // Import a CSS module for styling
import { addToCart } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const { id, title, price, imageUrl } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productCard}>
      {/* {JSON.stringify(product?.image)} */}
      <img src={product?.image} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product?.title?.en}</h3>
        <p className={styles.productPrice}>
          ${product?.prices?.price.toFixed(2)}
        </p>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
