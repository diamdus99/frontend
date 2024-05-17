import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDisplay from '@/components/search/ProductDisplay';
const ProductDisplays = (props) => {
  let { state } = useLocation();
  const [productsData, setproductsData] = useState(state);

  // const location = useLocation();
  // setproductsData();
  console.log(state); // {myOgj: obj}state
  // console.log(JSON.parse(JSON.stringify(state.data[1]))); // {myOgj: obj}state
  return (
    <div>
      <ProductDisplay
        shape={productsData.shape}
        carat={productsData.crt}
        color={productsData.color}
        clarity={productsData.clr}
        cut={productsData.cut}
        symmetry={productsData.sym}
        total={productsData.total}
      />
      {/* {JSON.stringify(productsData)} */}
      {/* ProductDisplaysProductDisplaysProductDisplaysProductDisplaysProductDisplaysProductDisplays
      {JSON.stringify(productsData.shape)} */}
      {/* {JSON.parse(JSON.stringify(productsData.data))} */}
    </div>
  );
};

export default ProductDisplays;
