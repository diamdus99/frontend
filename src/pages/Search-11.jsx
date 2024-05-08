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
  Avatar,
} from '@windmill/react-ui';
import { useTranslation } from 'react-i18next';
import { FiImage, FiVideo } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import Iframe from 'react-iframe';

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
import CheckBox from '@/components/form/others/CheckBox';
import useProductFilter from '@/hooks/useProductFilter';
import DeleteModal from '@/components/modal/DeleteModal';
import BulkActionDrawer from '@/components/drawer/BulkActionDrawer';
import TableLoading from '@/components/preloader/TableLoading';
import SelectCategory from '@/components/form/selectOption/SelectCategory';
import BeSpokeDrawer from '@/components/drawer/BeSpokeDrawer';
import SwitchToggle from '@/components/form/switch/SwitchToggle';

const Search = () => {
  const { toggleSidebar, setNavBar } = useContext(SidebarContext);
  const [clicked, setClicked] = useState(false);
  const { data, loading, error } = useAsync(() =>
    ProductServices.getAllDiamonds({})
  );

  const handleClick = () => {
    setClicked(!clicked);
  };

  React.useEffect(() => {
    setNavBar(false);
    toggleSidebar;
  }, []);
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

  // const { data, loading, error } = useAsync(() =>
  //   ProductServices.getAllProducts({
  //     page: currentPage,
  //     limit: limitData,
  //     category: category,
  //     title: searchText,
  //     price: sortedField,
  //   })
  // );

  // console.log("product page", data);

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const gridIframe = React.useRef(null);

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
  function handleIframe() {
    const iframeItem = gridIframe.current;
    const anchors = iframeItem.contentWindow.document.getElementsByTagName('a');
  }

  const image =
    'https://videos.gem360.in/Vision360.html?d=1704241153-ED174-155D';

  return (
    <>
      <Iframe
        url={image}
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </>
  );
};

export default Search;
