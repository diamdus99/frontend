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
    <Button
      // size="small"
      onClick={onClick}
      className={`${
        onSelect
          ? 'bg-blue-950 text-white'
          : 'bg-gray-100  forced-colors:text-blue-950'
      } mr-2`}
    >
      {props.name}
    </Button>
  );
};

export default SearchCarat;
