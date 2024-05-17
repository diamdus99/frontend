import React from 'react';
import { Card, CardBody } from '@windmill/react-ui';
import useUtilsFunction from '@/hooks/useUtilsFunction';
import { FaUserCircle } from 'react-icons/fa';

const SupportCard = (props) => {
  const { showDateTimeFormat } = useUtilsFunction();
  return (
    <div>
      <Card className="flex m-3 ">
        <FaUserCircle className="  self-center   object-contain p-6 h-32 w-32" />
        <CardBody>
          <p className=" font-semibold text-gray-600 dark:text-gray-300">
            {props.subject}
          </p>
          <p className="text-gray-600 dark:text-gray-400">{props.notes}</p>

          <div className="flex row-auto mt-3 ">
            <p> Update: {showDateTimeFormat(props.updatedAt)}</p>
            <p className="ml-12">Product: Quantial</p>
            <p className="ml-12">Comments: 2</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SupportCard;
