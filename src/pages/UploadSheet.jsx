import { useTranslation } from 'react-i18next';
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
//internal import

import Error from '@/components/form/others/Error';
import spinnerLoadingImage from '@/assets/img/spinner.gif';
import PageTitle from '@/components/Typography/PageTitle';
import { ReactSpreadsheetImport } from 'react-spreadsheet-import';
import { useState } from 'react';
import ProductServices from '@/services/ProductServices';
import useAsync from '@/hooks/useAsync';
import TableLoading from '@/components/preloader/TableLoading';
import CheckBox from '@/components/form/others/CheckBox';
import DiamondsProductTable from '@/components/product/DiamondsProductTable';
const UploadSheet = () => {
  const { t } = useTranslation();
  const [isOpen, setisOpen] = useState(true);
  const { data, loading, error } = useAsync(() =>
    ProductServices.getAllDiamonds({})
  );

  const onClose = () => {
    console.log('onClose');
    setisOpen(false);
  };

  const onSubmit = (data, file) => {
    console.log('onSubmit', data, file);
    ProductServices.addDiamondProduct(data);
  };

  const fields = [
    {
      // Visible in table header and when matching columns.
      label: 'SRNO',
      // This is the key used for this field when we call onSubmit.
      key: 'srno',
      // Allows for better automatic column matching. Optional.
      alternateMatches: ['SRNO', 'SRNO'],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: 'input',
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: '1',
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: 'required',
          errorMessage: 'Name is required',
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: 'error',
        },
      ],
    },
    {
      label: 'STONENO.',
      key: 'stoneno',
      alternateMatches: ['STONENO.', 'STONENO.'],
      fieldType: {
        type: 'input',
      },
      example: 'ED165-281C',
    },
    {
      label: 'STONENO.',
      key: 'stoneno',
      alternateMatches: ['STONENO.', 'STONENO.'],
      fieldType: {
        type: 'input',
      },
      example: 'ED165-281C',
    },
    {
      label: 'STOCK.',
      key: 'stock',
      alternateMatches: ['STOCK.', 'STOCK.'],
      fieldType: {
        type: 'input',
      },
      example: '0.50-0.69',
    },
    {
      label: 'SHAPE.',
      key: 'shape',
      alternateMatches: ['SHAPE.', 'shape'],
      fieldType: {
        type: 'input',
      },
      example: 'ROUND',
    },
    {
      label: 'WEIGHT.',
      key: 'weight',
      alternateMatches: ['WEIGHT', 'weight'],
      fieldType: {
        type: 'input',
      },
      example: '0.5',
    },
    {
      label: 'COLOR',
      key: 'color',
      alternateMatches: ['COLOR', 'color'],
      fieldType: {
        type: 'input',
      },
      example: 'D',
    },
    {
      label: 'CLARITY',
      key: 'clarity',
      alternateMatches: ['CLARITY', 'clarity'],
      fieldType: {
        type: 'input',
      },
      example: 'VS1',
    },
    {
      label: 'RapNet Price.',
      key: 'rapnetprice',
      alternateMatches: ['RapNet Price.', 'RapNet Price.'],
      fieldType: {
        type: 'input',
      },
      example: '36000',
    },
    {
      label: 'DIS%',
      key: 'discount',
      alternateMatches: ['DIS%', 'DIS%', 'discount'],
      fieldType: {
        type: 'input',
      },
      example: '23',
    },
    {
      label: '$/CRT',
      key: 'crt',
      alternateMatches: ['$/CRT', 'crt'],
      fieldType: {
        type: 'input',
      },
      example: '3600',
    },
    {
      label: 'TOTAL$',
      key: 'total',
      alternateMatches: ['TOTAL$', 'TOTAL$', 'total'],
      fieldType: {
        type: 'input',
      },
      example: '1800',
    },
    {
      label: 'CUT',
      key: 'cut',
      alternateMatches: ['CUT', 'cut'],
      fieldType: {
        type: 'input',
      },
      example: 'EX',
    },
    {
      label: 'POLISH',
      key: 'polish',
      alternateMatches: ['POLISH', 'polish'],
      fieldType: {
        type: 'input',
      },
      example: 'EX',
    },
    {
      label: 'SYM',
      key: 'sym',
      alternateMatches: ['SYM', 'sym'],
      fieldType: {
        type: 'input',
      },
      example: 'EX',
    },
    {
      label: 'FLR',
      key: 'flr',
      alternateMatches: ['FLR', 'flr'],
      fieldType: {
        type: 'input',
      },
      example: 'None',
    },
    {
      label: 'NOBGM',
      key: 'nobgm',
      alternateMatches: ['NOBGM', 'nobgm'],
      fieldType: {
        type: 'input',
      },
      example: '',
    },
    {
      label: 'LAB',
      key: 'lab',
      alternateMatches: ['LAB', 'lab'],
      fieldType: {
        type: 'input',
      },
      example: 'IGI',
    },
    {
      label: 'REPORT NO.',
      key: 'reportno',
      alternateMatches: ['REPORT NO.', 'REPORT NO.'],
      fieldType: {
        type: 'input',
      },
      example: 'LG617419597',
    },
    {
      label: 'MEASUREMENTS',
      key: 'measurements',
      alternateMatches: ['MEASUREMENTS', 'MEASUREMENTS'],
      fieldType: {
        type: 'input',
      },
      example: '5.04x5.08x3.17',
    },
    {
      label: 'LENTH',
      key: 'length',
      alternateMatches: ['LENTH', 'length'],
      fieldType: {
        type: 'input',
      },
      example: '5.04',
    },
    {
      label: 'WIDTH',
      key: 'width',
      alternateMatches: ['WIDTH', 'width'],
      fieldType: {
        type: 'input',
      },
      example: '5.08',
    },
    {
      label: 'TD',
      key: 'td',
      alternateMatches: ['TD', 'td'],
      fieldType: {
        type: 'input',
      },
      example: '3.17',
    },
    {
      label: 'RATIO',
      key: 'ratio',
      alternateMatches: ['RATIO', 'ratio'],
      fieldType: {
        type: 'input',
      },
      example: '1.00',
    },
    {
      label: 'GIRDLE%',
      key: 'girdle',
      alternateMatches: ['GIRDLE%', 'girdle'],
      fieldType: {
        type: 'input',
      },
      example: '3.8',
    },
    {
      label: 'TD%',
      key: 'td',
      alternateMatches: ['TD%', 'td'],
      fieldType: {
        type: 'input',
      },
      example: '3.8',
    },
    {
      label: 'TABLE%',
      key: 'table',
      alternateMatches: ['TABLE%', 'table'],
      fieldType: {
        type: 'input',
      },
      example: '3.8',
    },
    {
      label: 'CROWN HEIGHT',
      key: 'crownheight',
      alternateMatches: ['CROWN HEIGHT', 'CROWN HEIGHT'],
      fieldType: {
        type: 'input',
      },
      example: '15.5',
    },
    {
      label: 'CROWNANG',
      key: 'crownang',
      alternateMatches: ['CROWNANG', 'CROWNANG'],
      fieldType: {
        type: 'input',
      },
      example: '15.5',
    },
    {
      label: 'PAVANG',
      key: 'pavang',
      alternateMatches: ['PAVANG', 'pavang'],
      fieldType: {
        type: 'input',
      },
      example: '15.5',
    },
    {
      label: 'PAVDEPTH',
      key: 'pavdepth',
      alternateMatches: ['PAVDEPTH', 'pavdepth'],
      fieldType: {
        type: 'input',
      },
      example: '15.5',
    },
    {
      label: 'VIDEOLINK',
      key: 'videolink',
      alternateMatches: ['VIDEOLINK', 'videolink'],
      fieldType: {
        type: 'input',
      },
      example:
        'https://videos.gem360.in/Vision360.html?d=2601241400-ED165-281C',
    },
    {
      label: 'IMAGE LINK',
      key: 'imagelink',
      alternateMatches: ['IMAGE LINK', 'imagelink'],
      fieldType: {
        type: 'input',
      },
      example:
        'https://videos.gem360.in/imaged/2601241400-ED165-281C/still.jpg',
    },
    {
      label: 'CERT LINK',
      key: 'certlink',
      alternateMatches: ['CERT LINK', 'certlink'],
      fieldType: {
        type: 'input',
      },
      example: 'https://www.igi.org/reports/verify-your-report?r=617419594',
    },
    {
      label: 'TYPE',
      key: 'type',
      alternateMatches: ['TYPE', 'TYPE'],
      fieldType: {
        type: 'input',
      },
      example: 'HPHT',
    },
    {
      label: 'LOCATION',
      key: 'location',
      alternateMatches: ['LOCATION', 'LOCATION'],
      fieldType: {
        type: 'input',
      },
      example: 'SURAT',
    },
  ];
  return (
    <>
      <PageTitle>Upload File</PageTitle>
      <div className="sm:container md:p-6 p-4 w-full mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
        <ReactSpreadsheetImport
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={onSubmit}
          fields={fields}
        />
      </div>
      {/* <div>{JSON.stringify(data)}</div> */}
      {loading ? (
        <TableLoading row={12} col={7} width={160} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>STONENO</TableCell>
                <TableCell>SHAPE</TableCell>
                <TableCell>WEIGHT</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>CLARITY</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell className="text-center">Image</TableCell>
                <TableCell className="text-center">TYPE</TableCell>
              </tr>
            </TableHeader>
            <DiamondsProductTable
              //   lang={lang}
              //   isCheck={isCheck}
              products={data}
              //   setIsCheck={setIsCheck}
            />
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default UploadSheet;
