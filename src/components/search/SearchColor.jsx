import React from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Button,
  Card,
  CardBody,
  Pagination,
  Avatar,
} from '@windmill/react-ui';
const SearchColor = (props) => {
  const [onSelect, setonSelect] = React.useState(false);
  const onClick = () => {
    console.log('clicked');
    setonSelect(!onSelect);
    props.selected(onSelect, props.name);
  };
  return (
    <button
      onClick={onClick}
      className={`${
        onSelect
          ? 'bg-blue-950 text-white'
          : 'bg-gray-100  forced-colors:text-blue-950'
      } mr-2  font-medium rounded-lg text-sm px-5 py-2.5`}
    >
      {props.name}{' '}
    </button>
  );
};

export default SearchColor;
