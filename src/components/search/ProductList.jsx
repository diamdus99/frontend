import React from 'react';
import ProductCard from './ProductCard';

const ProductList = (props) => {
  const onButton = () => {
    console.log('onButton');
  };
  return (
    <div>
      {props.loading}
      {props.error}
      {/* {JSON.stringify(props.data[0])} */}

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.data.map((i) => (
              <ProductCard onButton={onButton} data={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
