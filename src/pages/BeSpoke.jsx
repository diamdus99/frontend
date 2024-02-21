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
  Card,
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
import BeSpokeDrawer from '@/components/drawer/BeSpokeDrawer';

const BeSpoke = () => {
  const { title, allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

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
    <>
      <PageTitle>{t('BeSpoke')}</PageTitle>
      <DeleteModal ids={allId} setIsCheck={setIsCheck} title={title} />
      <BulkActionDrawer ids={allId} title="BeSpoke" />
      <MainDrawer>
        <BeSpokeDrawer id={serviceId} />
      </MainDrawer>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody className="">
          <form
            onSubmit={handleSubmitForAll}
            className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex"
          >
            {/* <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
              <UploadManyTwo
                title="Products"
                filename={filename}
                isDisabled={isDisabled}
                totalDoc={data?.totalDoc}
                handleSelectFile={handleSelectFile}
                handleUploadMultiple={handleUploadMultiple}
                handleRemoveSelectFile={handleRemoveSelectFile}
              />
            </div> */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  disabled={isCheck.length < 1}
                  onClick={() => handleUpdateMany(isCheck)}
                  className="w-full rounded-md h-12 btn-gray text-gray-600"
                >
                  <span className="mr-2">
                    <FiEdit />
                  </span>
                  {t('BulkAction')}
                </Button>
              </div> */}
             
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  onClick={toggleDrawer}
                  className="w-full rounded-md h-12"
                >
                  <span className="mr-2">
                    <FiPlus />
                  </span>
                  {t('Select Your Job Type')}
                </Button>
              </div> <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  disabled={isCheck?.length < 1}
                  onClick={() => handleDeleteMany(isCheck, data.products)}
                  className="w-full rounded-md h-12 bg-red-300 disabled btn-red"
                >
                  <span className="mr-2">
                    <FiTrash2 />
                  </span>

                  {t('Delete')}
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>

     
    </>
  );
};

export default BeSpoke;
