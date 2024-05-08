import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDisplays = () => {
  let { id } = useParams();
  return (
    <div>
      ProductDisplaysProductDisplaysProductDisplaysProductDisplaysProductDisplaysProductDisplays
      {JSON.stringify(id)}
    </div>
  );
};

export default ProductDisplays;
