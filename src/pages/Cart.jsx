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
import CheckoutCart from './CheckoutCart';

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
      <div class="container mx-auto mt-10">
        <div class="sm:flex shadow-md my-10">
          <div class="  w-full  sm:w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">3 Items</h2>
            </div>
            <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div class="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  class="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                  alt="Black Leather Purse"
                  class="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  RF293
                </p>
                <div class="flex items-center justify-between w-full">
                  <p class="text-base font-black leading-none text-gray-800">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p class="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                <p class="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div class="flex items-center justify-between pt-5">
                  <div class="flex itemms-center">
                    <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p class="text-base font-black leading-none text-gray-800">
                    ,000
                  </p>
                </div>
              </div>
            </div>

            <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div class="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                  alt="Black Leather Purse"
                  class="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                  alt="Black Leather Purse"
                  class="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  RF293
                </p>
                <div class="flex items-center justify-between w-full">
                  <p class="text-base font-black leading-none text-gray-800">
                    Luxe card holder
                  </p>
                  <select
                    aria-label="Select quantity"
                    class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p class="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p class="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                <p class="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div class="flex items-center justify-between pt-5">
                  <div class="flex itemms-center">
                    <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p class="text-base font-black leading-none text-gray-800">
                    ,000
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#"
              class="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div
            id="summary"
            class=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
          >
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Items 3</span>
              <span class="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div class="py-10">
              <label
                for="promo"
                class="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                class="p-2 text-sm w-full"
              />
            </div>
            <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
