import React, { useState, useEffect, useContext } from 'react';
import CartCard from '../components/product/CartCard';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkoutCart } from '../reduxStore/slice/CartSlice';
import { SidebarContext } from '@/context/SidebarContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useRazorpay from 'react-razorpay';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51OKwUNAPllPw9NOLoxslegfFfAtL0RkaTKFW9calo1bMECfdiHF0ZTp6SL4F3rGXDlDctoqcPwAKEBULj4UGNaf600nBgHO2Nf'
);

const Cart = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [Razorpay] = useRazorpay();

  const { toggleSidebar, setNavBar } = useContext(SidebarContext);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [ClientSecret, setClientSecret] = useState('');
  const [showStripe, setshowStripe] = useState(false);

  useEffect(() => {
    check();

    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  useEffect(() => {
    setNavBar(false);
    toggleSidebar;
  }, []);

  const check = async () => {
    fetch('http://localhost:5055/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
        setshowStripe(true);
      });
  };
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    ClientSecret,
    appearance,
  };

  const goToStripe = () => {
    console.log('gotostripe');
    return (
      <>
        {showStripe && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </>
    );
  };

  const handlePayment = async () => {
    const options = {
      key: 'rzp_test_L5y8lHz3j6cXBY', // Enter the Key ID generated from the Dashboard
      amount: '5000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Diamdus',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Piyush Garg',
        email: 'youremail@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <div>
      <div>
        <div className="w-full min-h-screen flex my-[100px] mx-[30px] md:mx-[100px]">
          <div className="flex flex-col lg:flex-row gap-x-6">
            <div className="">
              {/* {JSON.stringify(cart.map((i) => i?.productId))} */}
              {/* {cart.map((cartItem) => (
                <CartCard key={cartItem?.productId} item={cartItem} />
              ))} */}
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
                      Shop Now <Link to="/explore">Shop Now</Link>
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
                    onClick={handlePayment}
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

// <div>
// <div>
//   <div className="w-full min-h-screen flex my-[100px] mx-[30px] md:mx-[100px]">
//     <div className="flex flex-col lg:flex-row gap-x-6">
//       <div className="">
//         {cart.map((cartItem) => (
//           <CartCard key={cartItem.id} item={cartItem} />
//         ))}
//       </div>

//       {cart.length === 0 ? (
//         <div className="min-w-[320px] md:min-w-[1280px] md:max-h-[100px] flex justify-center">
//           <div className="flex flex-col justify-around gap-y-4 md:gap-y-10">
//             <div className="">
//               <h1 className="text-4xl dark:text-white md:text-6xl font-semibold">
//                 Cart is Empty !!
//               </h1>
//             </div>
//             <div className="flex justify-center">
//               <button className="bg-[#2a2a2a] w-[200px] text-white p-4 rounded-md cursor-pointer hover:bg-black">
//                 Shop Now {/* <Link to="/explore">Shop Now</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className=" justify-between">
//           <div>
//             <h5 className="font-bold text-slate-300 hover:text-slate-500">
//               TOTAL ITEMS : {cart.length}
//             </h5>
//             <h5 className="text-xl dark:text-white font-bold text-slate-500">
//               TOTAL PRICE : ₹ {total}
//             </h5>
//           </div>
//           <div>
//             <button
//               className="bg-[#2a2a2a] w-full text-white p-2 rounded-md cursor-pointer hover:bg-black"
//               // onClick={handleSubmit}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// </div>
// </div>
