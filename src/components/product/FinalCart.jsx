import React from 'react';

const FinalCart = (props) => {
  return (
    <div>
      {/* {JSON.stringify(props.item.data)} */}
      <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
          <img
            className="p-12"
            src={props.item.data.imagelink}
            alt="Black Leather Purse"
          />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
          <div class="flex items-center justify-between w-full">
            <p class="text-base font-black leading-none text-gray-800">
              {props.item.data.shape} {props.item.data.color}{' '}
              {props.item.data.clarity} {props.item.data.crt}
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
          <p class="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
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
              $ {props.item.data.total}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCart;
