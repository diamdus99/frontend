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
import useAsync from '@/hooks/useAsync';
import SettingServices from '@/services/SettingServices';
const stripePromise = loadStripe(
  'pk_test_51OKwUNAPllPw9NOLoxslegfFfAtL0RkaTKFW9calo1bMECfdiHF0ZTp6SL4F3rGXDlDctoqcPwAKEBULj4UGNaf600nBgHO2Nf'
);

const Calculator = () => {
  const [diamondType, setDiamondType] = useState('round'); // Default diamond type
  const [diamondWeight, setDiamondWeight] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const { toggleSidebar, setNavBar } = useContext(SidebarContext);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [ClientSecret, setClientSecret] = useState('');
  const [showStripe, setshowStripe] = useState(false);

  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

  const calculatePrice = () => {
    console.log(globalSetting?.base_gold_price);
    // Replace this formula with your actual pricing logic
    const commision = parseFloat(globalSetting?.base_gold_price);
    const pricePerCarat = diamondType === 'round' ? 2000 : 1500;
    const totalPrice = parseFloat(diamondWeight) * pricePerCarat + commision;

    setCalculatedPrice(totalPrice.toFixed(2));
  };

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

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Gem Calculator</h1>

      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="diamondType"
            className="block text-sm font-medium text-gray-600"
          >
            Diamond Type
          </label>
          <select
            id="diamondType"
            className="mt-1 block w-full p-2 border rounded-md"
            value={diamondType}
            onChange={(e) => setDiamondType(e.target.value)}
          >
            <option value="round">Round</option>
            <option value="other">Other Shapes</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="diamondWeight"
            className="block text-sm font-medium text-gray-600"
          >
            Diamond Weight (carats)
          </label>
          <input
            type="number"
            id="diamondWeight"
            className="mt-1 block w-full p-2 border rounded-md"
            placeholder="Enter diamond weight"
            value={diamondWeight}
            onChange={(e) => setDiamondWeight(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-950"
          onClick={calculatePrice}
        >
          Calculate Price
        </button>
      </div>

      {calculatedPrice && (
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-2">Calculated Price:</h4>
          <p>${calculatedPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;

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
