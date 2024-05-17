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
import BeSpoke1Drawer from '@/components/drawer/BeSpoke1Drawer';
import BespokeServices from '@/services/BespokeServices';
import BespokeTable from '@/components/besoke/BespokeTable';
import WishlistServices from '@/services/WishlistServices';
import DiamondsProductTable from '@/components/product/DiamondsProductTable';
import WishlistTable from '@/components/wishlist/WishlistTable';

const Wishlist = () => {
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
    WishlistServices.getUserWishList({})
  );

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleResetField = () => {
    setCategory('');
    setSortedField('');
    searchRef.current.value = '';
  };

  return (
    <>
      <PageTitle>Wishlist</PageTitle>
      {/* {JSON.stringify(data)} */}
      <TableContainer className="mb-8 dark:bg-gray-900">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Stone no</TableCell>
              <TableCell>Shape</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Clarity</TableCell>
              <TableCell>Cut</TableCell>
              <TableCell>Polish</TableCell>
              <TableCell>Flour</TableCell>
              <TableCell>Lab</TableCell>
              <TableCell>Report Number</TableCell>
              <TableCell>/ct</TableCell>
              <TableCell>Price</TableCell>
            </tr>
          </TableHeader>
          <WishlistTable orders={data} />
        </Table>

        {/* <TableFooter>
          <Pagination
            totalResults={data?.totalDoc}
            resultsPerPage={resultsPerPage}
            onChange={handleChangePage}
            label="Table navigation"
          />
        </TableFooter> */}
      </TableContainer>
    </>
  );
};

export default Wishlist;
