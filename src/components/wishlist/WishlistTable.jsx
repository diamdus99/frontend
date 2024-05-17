import { TableBody, TableCell, TableRow } from '@windmill/react-ui';

import { useTranslation } from 'react-i18next';
import { FiZoomIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

//internal import

import Status from '@/components/table/Status';
import Tooltip from '@/components/tooltip/Tooltip';
import useUtilsFunction from '@/hooks/useUtilsFunction';
import PrintReceipt from '@/components/form/others/PrintReceipt';
import SelectStatus from '@/components/form/selectOption/SelectStatus';

const WishlistTable = ({ orders }) => {
  // console.log('globalSetting',globalSetting)
  const { t } = useTranslation();
  const { showDateTimeFormat, currency, getNumberTwo } = useUtilsFunction();

  // console.log('orders',orders)

  return (
    <>
      <TableBody className="dark:bg-gray-900">
        {/* {JSON.stringify(orders)} */}
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">
                {order?.stoneno}
              </span>
            </TableCell>

            <TableCell>
              <span className="text-sm">{order?.shape}</span>
            </TableCell>

            <TableCell className="text-xs">
              <span className="text-sm">{order?.weight}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">{order?.color}</span>
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">{order?.clarity}</span>
            </TableCell>

            <TableCell className="text-xs">
              <span className="text-sm font-semibold">{order?.cut}</span>
            </TableCell>

            <TableCell className="text-center">
              <span className="text-sm font-semibold">{order?.polish}</span>
            </TableCell>

            <TableCell className="text-center">
              <span className="text-sm font-semibold">{order?.flr}</span>
            </TableCell>
            <TableCell className="text-center">
              <span className="text-sm font-semibold">{order?.lab}</span>
            </TableCell>
            <TableCell className="text-center">
              <span className="text-sm font-semibold">{order?.reportno}</span>
            </TableCell>
            <TableCell className="text-center">
              <span className="text-sm font-semibold">{order?.crt}</span>
            </TableCell>
            <TableCell className="text-right flex justify-end">
              <span className="text-sm font-semibold">{order?.total}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default WishlistTable;
