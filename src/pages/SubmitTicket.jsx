import React, { useContext } from 'react';
import { Button, Card, CardBody } from '@windmill/react-ui';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@windmill/react-ui';
import useAsync from '@/hooks/useAsync';

import SupportServices from '@/services/SupportServices';
import SupportCard from '@/components/support/SupportCard';
import { AdminContext } from '@/context/AdminContext';

const SubmitTicket = () => {
  const [openModal, setopenModal] = React.useState(false);
  const { data, loading, error } = useAsync(SupportServices.getAllSupports);
  const { dispatch } = useContext(AdminContext);
  const {
    state: { adminInfo },
  } = useContext(AdminContext);
  const [formData, setFormData] = React.useState({
    subject: '',
    name: adminInfo?.email,
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    // console.log(adminInfo, adminInfo?.email); // For demo: log form data
    SupportServices.addSupport(formData);
  };

  const submitTicketFunction = () => {
    setopenModal(true);
  };
  const onSubmit = (data) => {
    console.log('onSubmit', data);
    // ProductServices.addDiamondProduct(data);
  };
  return (
    <div>
      <Modal isOpen={openModal} onClose={() => setopenModal(false)}>
        <ModalHeader>Submit a Ticket</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="mt-1 p-2 w-full h-32 border rounded-md"
                required
              />
            </div>
            <Button
              className="w-full b  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline">
            Cancel
          </Button>
          <Button
            onClick={() => setopenModal(false)}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <div className="flex row-auto justify-between mb-9 ">
        <p className="mt-9 text-xl font-semibold mb-4 text-blue-950 self-center  ">
          {' '}
          Your Tickets
        </p>
        <Button
          type="submit"
          onClick={submitTicketFunction}
          className=" h-10  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center "
        >
          Submit a Ticket
        </Button>
      </div>
      {data.map((i) => (
        <SupportCard
          subject={i.subject}
          notes={i.notes}
          updatedAt={i.updatedAt}
        />
      ))}
    </div>
  );
};

export default SubmitTicket;
