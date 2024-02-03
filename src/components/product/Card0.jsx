import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/CartSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Card = (diamonds) => {
  const cart = useSelector((state) => state.cart);
  console.log(diamonds);
  const img = diamonds?.shoe?.image;
  const price = diamonds?.shoe?.prices?.price;
  const desc = diamonds?.shoe?.title.en;
  const id = diamonds?.shoe?._id;

  const dispatch = useDispatch();

  const add = () => {
    console.log(diamonds?.shoe);
    toast.success('diamonds?.shoe');
    // dispatch(addToCart(diamonds?.shoe));
    // toast.success('Added to cart');
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error('Removed item from cart');
  };

  React.useEffect(() => {
    console.log('hellohellohellohellohello');
  }, []);

  return (
    <div>
      {/* {JSON.stringify(diamonds?.shoe?._id)} */}
      <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
        <div className=" flex flex-col gap-6">
          <div>
            <img
              src={img}
              width={200}
              height={200}
              alt="shoe"
              className="mx-auto"
            />
            <Link to={`/preview/${id}`}>
              <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse">
                preview
              </button>
            </Link>
          </div>

          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
            {desc.split(' ').slice(0, 20).join(' ') + '...'}
          </p>

          <div className="flex  items-center justify-between">
            {cart.some((item) => item.id === diamonds?.shoe?._id) ? (
              <button
                onClick={() => remove(shoe.id)}
                className="bg-red-400 text-white p-2 rounded-md text-sm "
              >
                Remove Item
              </button>
            ) : (
              <button
                onClick={add}
                className="bg-black dark:bg-slate-800 dark:hover:bg-black text-white p-2 rounded-md text-sm "
              >
                Add to Cart
              </button>
            )}
            <span className="text-xl font-semibold">₹ {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
