import React from 'react';
import { Card } from '@windmill/react-ui';

const SearchShape = (props) => {
  const [onSelect, setonSelect] = React.useState(false);
  const onClick = () => {
    console.log('clicked');
    setonSelect(!onSelect);
    props.selected(onSelect, props.name);
  };
  return (
    <Card
      selected={onSelect}
      colored
      onClick={onClick}
      className={`${
        onSelect ? 'bg-gray-100' : 'bg-blue-950'
      } justify-center items-center text-center`}
    >
      <div className="flex items-center justify-center">
        <img
          className="xl:w-1/2 sm:1/6 md:w-1/6  self-center align-middle place-self-center justify-center mt-3 "
          src={onSelect ? props.selectDiamond : props.unSelectDiamond}
        />
      </div>
      <div className="flex items-center justify-center mb-3">
        <p className={`${onSelect ? 'text-blue-950' : 'text-white'}`}>
          {props.name}
        </p>
      </div>
    </Card>
  );
};

export default SearchShape;
