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
import FinalCart from '@/components/product/FinalCart';
import ReactDOM from 'react-dom';

import { PaymentElement, ElementsConsumer } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
  'pk_test_51JFgIlSAv442c1sqZ9klPRaQHsn1HtL388nyZDgWM034PXiPQdln9f9O6WuvQPVFMMBPk5VgjkwyYjMBbKOMNlVz009hSsejBm'
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

  async function handleCheckout() {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1PH9DTSAv442c1sqUDHikIbO',
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:4100/success`,
      cancelUrl: `http://localhost:4100/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

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

            {cart.map((cartItem) => (
              <FinalCart key={cartItem?.productId} item={cartItem} />
            ))}

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
              <button
                onClick={handleCheckout}
                class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              >
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
