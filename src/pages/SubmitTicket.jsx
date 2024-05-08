import React from 'react';
import { Button } from '@windmill/react-ui';

const SubmitTicket = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData); // For demo: log form data
  };
  return (
    <div>
      <div className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Submit a Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
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
              name="message"
              value={formData.message}
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

          {/* <button
            type="submit"
            className="w-full b hover:bg-blue-600g-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default SubmitTicket;
