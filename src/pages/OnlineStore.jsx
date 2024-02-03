import React, { useContext, useState } from 'react';
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Button,
  CardBody,
  Pagination,
} from '@windmill/react-ui';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

//internal import

import useAsync from '@/hooks/useAsync';
import useToggleDrawer from '@/hooks/useToggleDrawer';
import UploadManyTwo from '@/components/common/UploadManyTwo';
import NotFound from '@/components/table/NotFound';
import ProductServices from '@/services/ProductServices';
import PageTitle from '@/components/Typography/PageTitle';
import { SidebarContext } from '@/context/SidebarContext';
import ProductTable from '@/components/product/ProductTable';
import MainDrawer from '@/components/drawer/MainDrawer';
import ProductDrawer from '@/components/drawer/ProductDrawer';
import CheckBox from '@/components/form/others/CheckBox';
import useProductFilter from '@/hooks/useProductFilter';
import DeleteModal from '@/components/modal/DeleteModal';
import BulkActionDrawer from '@/components/drawer/BulkActionDrawer';
import TableLoading from '@/components/preloader/TableLoading';
import SelectCategory from '@/components/form/selectOption/SelectCategory';
import Card from '@/components/product/Card';
import ProductCard from './ProductCard';
import { addToCart } from '../redux/slices/CartSlice';
import { useSelector } from 'react-redux';

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: 29.99,
    imageUrl: 'https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 39.99,
    imageUrl: 'https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg',
  },
  {
    id: 3,
    title: 'Product 2',
    price: 39.99,
    imageUrl: 'https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg',
  },
  {
    id: 4,
    title: 'Product 2',
    price: 39.99,
    imageUrl: 'https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg',
  },
  {
    id: 5,
    title: 'Product 2',
    price: 39.99,
    imageUrl: 'https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg',
  },
  {
    id: 6,
    title: 'Product 2',
    price: 39.99,
    imageUrl: 'https://cdn.britannica.com/28/8028-004-8469CD5B/Diamond.jpg',
  },
  // Add more products as needed
];

const Products = () => {
  const { title, allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

  const cartCounter = useSelector((state) => state.cart.length);
  const { toggleSidebar, handleLanguageChange, setNavBar, navBar } =
    useContext(SidebarContext);

  React.useEffect(() => {
    setNavBar(false);
    toggleSidebar;
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const { t } = useTranslation();
  const {
    toggleDrawer,
    lang,
    currentPage,
    handleChangePage,
    searchText,
    category,
    setCategory,
    searchRef,
    handleSubmitForAll,
    sortedField,
    setSortedField,
    limitData,
  } = useContext(SidebarContext);

  const { data, loading, error } = useAsync(() =>
    ProductServices.getAllProducts({
      page: currentPage,
      limit: limitData,
      category: category,
      title: searchText,
      price: sortedField,
    })
  );

  // console.log("product page", data);

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.products.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  // handle reset field
  const handleResetField = () => {
    setCategory('');
    setSortedField('');
    searchRef.current.value = '';
  };

  // console.log('productss',products)
  const {
    serviceData,
    filename,
    isDisabled,
    handleSelectFile,
    handleUploadMultiple,
    handleRemoveSelectFile,
  } = useProductFilter(data?.products);

  return (
    <div>
      <PageTitle>{t('ProductsPage')}</PageTitle>
      <DeleteModal ids={allId} setIsCheck={setIsCheck} title={title} />
      <BulkActionDrawer ids={allId} title="Products" />
      {console.log(data?.products?.map((i) => i.description))}
      {/* <button onClick={add}>Add</button> */}

      {/* <p>Number of items in the cart: {cartCounter}</p> */}
      <div className="w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto ">
        {data?.products?.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}

        {/* {state.counter} */}
        {/* {data?.products?.map((diamonds, idx) => (
          <Card key={diamonds.id} shoe={diamonds} />
        ))} */}
      </div>
    </div>
  );
};

export default Products;
