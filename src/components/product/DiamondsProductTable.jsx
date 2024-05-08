import {
  Avatar,
  Badge,
  TableBody,
  TableCell,
  TableRow,
} from '@windmill/react-ui';
import { t } from 'i18next';
import { FiZoomIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

//internal import
import MainDrawer from '@/components/drawer/MainDrawer';
import ProductDrawer from '@/components/drawer/ProductDrawer';
import CheckBox from '@/components/form/others/CheckBox';
import DeleteModal from '@/components/modal/DeleteModal';
import EditDeleteButton from '@/components/table/EditDeleteButton';
import ShowHideButton from '@/components/table/ShowHideButton';
import Tooltip from '@/components/tooltip/Tooltip';
import useToggleDrawer from '@/hooks/useToggleDrawer';
import useUtilsFunction from '@/hooks/useUtilsFunction';

//internal import

const DiamondsProductTable = ({ products }) => {
  return (
    <>
      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={i + 1}>
            <TableCell>{product.stoneno}</TableCell>
            <TableCell>{product.shape}</TableCell>
            <TableCell>{product.weight}</TableCell>
            <TableCell>{product.color}</TableCell>
            <TableCell>{product.clarity}</TableCell>
            <TableCell>{product.total}</TableCell>
            <TableCell>
              <Avatar
                className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                src={product.imagelink}
                alt="product"
              />
            </TableCell>
            <TableCell>{product.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default DiamondsProductTable;
