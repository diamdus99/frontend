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

const Products = () => {
  const { title, allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

  const { toggleSidebar, handleLanguageChange, setNavBar, navBar } =
    useContext(SidebarContext);

  React.useEffect(() => {
    setNavBar(false);
    toggleSidebar;
  }, []);

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
    <div style={{ margin: 0 }}>
      <PageTitle>{t('ProductsPage')}</PageTitle>
      <DeleteModal ids={allId} setIsCheck={setIsCheck} title={title} />
      <BulkActionDrawer ids={allId} title="Products" />
      {/* {JSON.stringify(data?.products)} */}
      <div className="w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto ">
        {data?.products?.map((diamonds, idx) => (
          <Card key={diamonds.id} shoe={diamonds} />
        ))}
      </div>
    </div>
  );
};

export default Products;
