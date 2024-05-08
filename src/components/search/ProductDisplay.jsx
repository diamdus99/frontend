import React from 'react';
import {
  Card,
  CardBody,
  TableContainer,
  Table,
  TableHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@windmill/react-ui';
import { useEffect } from 'react';
import TableRowComponent from './TableRowComponent';
import { PiHandDuotone } from 'react-icons/pi';

const ProductDisplay = () => {
  const [frontImages, setfrontImages] = React.useState('');
  const [isVideo, setisVideo] = React.useState(false);
  const [isModalOpen, setisModalOpen] = React.useState(false);

  useEffect(() => {
    setfrontImages(
      'https://videos.gem360.in/imaged/2601241356-ED165-316A/still.jpg'
    );
  }, []);

  const holdProduct = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <div>
      <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">
          <div class="lg:col-gap-12 xl:col-gap-16 mt-4 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div class="lg:col-span-3 lg:row-end-1">
              <div class="lg:flex lg:items-start  ">
                {isVideo ? (
                  <div class="lg:order-2 lg:ml-5 flex justify-center ">
                    <iframe
                      className="h-96  w-auto"
                      src={frontImages}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="lg:order-2 lg:ml-5">
                    <img class="h-full w-full " src={frontImages} alt="" />
                  </div>
                )}

                <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div class="flex flex-row items-start lg:flex-col">
                    <button
                      onClick={() => {
                        setisVideo(false);
                        setfrontImages(
                          'https://videos.gem360.in/imaged/2601241356-ED165-316A/still.jpg'
                        );
                      }}
                      type="button"
                      class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                    >
                      <img
                        class="h-full w-full object-cover p-3 "
                        src="https://videos.gem360.in/imaged/2601241356-ED165-316A/still.jpg"
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => {
                        setisVideo(true);
                        setfrontImages(
                          'https://videos.gem360.in/Vision360.html?d=2601241356-ED165-316A'
                        );
                      }}
                      type="button"
                      class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center justify-center flex"
                    >
                      <img
                        class="h-1/2 w-1/2 self-center justify-center  "
                        src="/360-video.png"
                        alt=""
                      />
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          'https://www.igi.org/reports/verify-your-report?r=617419593',
                          '_blank'
                        );
                      }}
                      type="button"
                      class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                    >
                      <img
                        class="h-full w-full object-contain"
                        src="GIA_Logo.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold  sm:text-3xl">
                CUSHION 1.01ct F VVS1 EX EX MED
              </h1>
              <p>Procurement Price</p>
              <p>2,595.19 $/ct</p>
              <p>$2,621.14</p>

              {/* <h2 class="mt-8 text-base text-gray-900">Choose subscription</h2> */}
              <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Shape
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">CUSHION</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Carat
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">1.01</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Color
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">F</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Clarity
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">VVS1</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Cut
                    </p>
                    <p className="text-gray-600 dark:text-gray-400"></p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Polish
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">EX</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Symmetry
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">EX</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <p className=" font-semibold text-gray-600 dark:text-gray-300 ">
                      Certificate
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">GIA</p>
                  </CardBody>
                </Card>
              </div>

              <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div class="flex items-end">
                  <h1 class="text-3xl font-bold">$60.50</h1>
                  <span class="text-base">/month</span>
                </div>

                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
              <Button
                onClick={holdProduct}
                className="text-white mt-6"
                iconLeft={PiHandDuotone}
              >
                Hold this product
              </Button>

              <ul class="mt-8 space-y-2">
                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    class="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      class=""
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>

                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    class="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      class=""
                    ></path>
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>

            <div class="lg:col-span-3">
              <div class="border-b border-gray-300">
                <nav class="flex gap-4">
                  <a
                    href="#"
                    title=""
                    class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                  >
                    {' '}
                    Diamond Details
                  </a>

                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                  >
                    Reviews
                    <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                      {' '}
                      1,209{' '}
                    </span>
                  </a>
                </nav>
              </div>

              <div className="lg:flex lg:flex-row gap-3 mt-3 ">
                <TableContainer>
                  <p className="ml-3 mt-3 mb-3">Basic Details</p>
                  <Table>
                    <TableHeader>
                      <TableRowComponent name="Shape" value="Round" />
                      <TableRowComponent name="Size" value="Round" />
                      <TableRowComponent name="Color" value="Round" />
                      <TableRowComponent name="Clarity" value="Round" />
                      <TableRowComponent name="Cut" value="Round" />
                      <TableRowComponent name="Polish" value="Round" />
                      <TableRowComponent name="Symmetry" value="Round" />
                      <TableRowComponent name="Fluorescence" value="Round" />
                      <TableRowComponent name="Lab" value="Round" />
                      <TableRowComponent name="Certificate" value="Round" />
                      <TableRowComponent name="Last update" value="Round" />
                    </TableHeader>
                  </Table>
                </TableContainer>
                <TableContainer>
                  <p className="ml-3 mt-3 mb-3">Measurements</p>
                  <Table>
                    <TableHeader>
                      <TableRowComponent name="Measurements" value="Round" />
                      <TableRowComponent name="Depth" value="Round" />
                      <TableRowComponent name="Table" value="Round" />
                      <TableRowComponent name="Crown Angle" value="Round" />
                      <TableRowComponent name="Crown Height" value="Round" />
                      <TableRowComponent name="Polish" value="Round" />
                      <TableRowComponent name="Symmetry" value="Round" />
                      <TableRowComponent name="Fluorescence" value="Round" />
                      <TableRowComponent name="Lab" value="Round" />
                      <TableRowComponent name="Certificate" value="Round" />
                      <TableRowComponent name="Last update" value="Round" />
                    </TableHeader>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>Hold Alert</ModalHeader>
          <ModalBody>
            This Product will hold on said price for 24 hrs.
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              layout="outline"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              onClick={closeModal}
              className="w-full sm:w-auto text-white"
            >
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </div>
  );
};

export default ProductDisplay;
