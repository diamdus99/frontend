import React from 'react';
import { Button } from '@windmill/react-ui';
const SearchCarat = (props) => {
  const [onSelect, setonSelect] = React.useState(false);
  const onClick = () => {
    console.log('clicked');
    setonSelect(!onSelect);
    props.selected(onSelect, props.name);
  };
  return (
    <button
      // size="small"
      onClick={onClick}
      className={`${
        onSelect
          ? 'bg-blue-950 text-white'
          : 'bg-gray-100  forced-colors:text-blue-950'
      } mr-2  font-medium rounded-lg text-sm px-5 py-2.5`}
    >
      {props.name}
    </button>
  );
};

export default SearchCarat;
