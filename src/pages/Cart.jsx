import React, { useState, useEffect, useContext } from 'react';
import CartCard from '../components/product/CartCard';
import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
import { checkoutCart } from '../reduxStore/slice/CartSlice';
import { SidebarContext } from '@/context/SidebarContext';
import toast from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
// import {
//   PaymentElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';
const Cart = () => {
  //   const stripe = useStripe();
  //   const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     if (elements == null) {
  //       return;
  //     }

  //     // Trigger form validation and wallet collection
  //     const { error: submitError } = await elements.submit();
  //     if (submitError) {
  //       // Show error to your customer
  //       setErrorMessage(submitError.message);
  //       return;
  //     }

  //     // Create the PaymentIntent and obtain clientSecret from your server endpoint
  //     const res = await fetch('/create-intent', {
  //       method: 'POST',
  //     });

  //     const { client_secret: clientSecret } = await res.json();

  //     const { error } = await stripe.confirmPayment({
  //       //`Elements` instance that was used to create the Payment Element
  //       elements,
  //       clientSecret,
  //       confirmParams: {
  //         return_url: 'https://example.com/order/123/complete',
  //       },
  //     });

  //     if (error) {
  //       // This point will only be reached if there is an immediate error when
  //       // confirming the payment. Show error to your customer (for example, payment
  //       // details incomplete)
  //       setErrorMessage(error.message);
  //     } else {
  //       // Your customer will be redirected to your `return_url`. For some payment
  //       // methods like iDEAL, your customer will be redirected to an intermediate
  //       // site first to authorize the payment, then redirected to the `return_url`.
  //     }
  //   };

  const { toggleSidebar, handleLanguageChange, setNavBar, navBar } =
    useContext(SidebarContext);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  //   const navigate = useNavigate();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + curr.retail_price_cents * curr.qty, 0)
    );
  }, [cart]);

  const checkout = () => {
    toast.success('Order Placed Successfully');
    localStorage.removeItem('localCart');
    dispatch(checkoutCart());
    navigate('/');
  };

  useEffect(() => {
    setNavBar(false);
    toggleSidebar;
  }, []);

  const payment = async () => {
    const stripe = await loadStripe(
      'pk_test_51MbLOWSAM6fIdhexWZjwL2HLvGYhcU4zlMjMlWX1BxHRAMF5N3MZsXdBxN2srjqxveFkafWRVOEswSUbLXNjKeEl00Kw8wOSEG'
    );
  };
  return (
    <div>
      <div>
        <div className="w-full min-h-screen flex my-[100px] mx-[30px] md:mx-[100px]">
          <div className="flex flex-col lg:flex-row gap-x-6">
            <div className="">
              {cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))}
            </div>

            {cart.length === 0 ? (
              <div className="min-w-[320px] md:min-w-[1280px] md:max-h-[100px] flex justify-center">
                <div className="flex flex-col justify-around gap-y-4 md:gap-y-10">
                  <div className="">
                    <h1 className="text-4xl dark:text-white md:text-6xl font-semibold">
                      Cart is Empty !!
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#2a2a2a] w-[200px] text-white p-4 rounded-md cursor-pointer hover:bg-black">
                      Shop Now {/* <Link to="/explore">Shop Now</Link> */}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" justify-between">
                <div>
                  <h5 className="font-bold text-slate-300 hover:text-slate-500">
                    TOTAL ITEMS : {cart.length}
                  </h5>
                  <h5 className="text-xl dark:text-white font-bold text-slate-500">
                    TOTAL PRICE : ₹ {total}
                  </h5>
                </div>
                <div>
                  <button
                    className="bg-[#2a2a2a] w-full text-white p-2 rounded-md cursor-pointer hover:bg-black"
                    // onClick={handleSubmit}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
