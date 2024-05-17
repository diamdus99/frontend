import React, { useState, useContext } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { Button } from '@windmill/react-ui';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/CartSlice';
import { AdminContext } from '@/context/AdminContext';
import WishlistServices from '@/services/WishlistServices';
import useAsync from '@/hooks/useAsync';

const ProductCard = (props) => {
  const [isFavrouite, setisFavrouite] = useState(false);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(props));
    toast.success('Added to cart');
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error('Removed item from cart');
  };

  const addFavourite = () => {
    setisFavrouite(!isFavrouite);
    WishlistServices.addUserWishlistProduct(props);
  };

  return (
    <div className="relative  w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <a href="#">
        <img
          className=" rounded-t-lg object-cover"
          src={props.data.imagelink ? props.data.imagelink : '/diamond.png'}
          alt="product image"
        />
      </a>
      {/* <Link to={`product-display/${props.data.shape}`}> */}
      <Link
        to={{
          pathname: `product-display/${props.data.shape}`,
          state: props.data,
        }}
        // state={{ some: 'value' }}
      >
        <h1 className="mr-3 ml-3 font-bold ">
          {props.data.shape} {props.data.weight} {props.data.color}{' '}
          {props.data.clarity} {props.data.cut} {props.data.polish}{' '}
          {props.data.sym} {props.data.weight}
        </h1>
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Available
      </span>
      <div className="absolute top-1 right-1 bg-white p-2 rounded-full">
        <FaHeart
          onClick={addFavourite}
          className={` text-center text-sm ${
            isFavrouite ? 'text-red-500' : 'text-gray-400'
          }`}
        />
      </div>

      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900  ">
            {props.name}
          </h5>
        </a>
        <div className="m-1 bg-indigo-50 p-1 text-center rounded  ">
          YES Eye Clean
        </div>
        <div className="flex flex-row justify-between font-bold text-xs	mt-2 mb-2 ">
          <div>
            <h3>M:</h3> 6.60*5.16*3.56
          </div>
          <div>
            <h3>T:</h3> 63.00%
          </div>
          <div>
            <h3>D:</h3> 68.90%
          </div>
          <div>
            <h3>R:</h3> 1.28
          </div>
        </div>
        <div className="flex flex-row justify-start text-xs	mt-2 mb-2   ">
          <TbTruckDelivery size={24} />
          &nbsp;&nbsp;6-9 business days
        </div>

        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">$249</span>
            <span className="text-sm text-slate-900 line-through">$299</span>
          </p>
          <Button onClick={add} className="text-white font-size ">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
