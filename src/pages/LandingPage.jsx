import React from 'react';
import Iframe from 'react-iframe';

const LandingPage = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a
            href="https://flowbite.com"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Diamdus
            </span>
          </a>
          <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <a
              href="#"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </a>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up
            </a>
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="mega-menu"
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company{' '}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
                >
                  <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul
                      class="space-y-4"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="p-4">
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Diamdus we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at Diamdus we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
            <iframe
              class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Diamdus
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Diamdus
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{' '}
              <a href="https://flowbite.com/" class="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* <div
        id="sticky-banner"
        tabindex="-1"
        class="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="flex items-center mx-auto">
          <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
              <svg
                class="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
              </svg>
              <span class="sr-only">Light bulb</span>
            </span>
            <span>
              New brand identity has been launched for the{' '}
              <a
                href="https://flowbite.com"
                class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
              >
                Flowbite Library
              </a>
            </span>
          </p>
        </div>
        <div class="flex items-center">
          <button
            data-dismiss-target="#sticky-banner"
            type="button"
            class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close banner</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
{
  /* <Iframe
  url="https://hicharge.in/wp-content/uploads/2024/05/Untitled-design-1.mp4"
  id=""
  width="100%"
/>; */
}
{
  /* <video
className="p-0 m-0 object-fill"
src="https://hicharge.in/wp-content/uploads/2024/05/Untitled-design-1.mp4"
autoPlay
muted
loop
/> */
}
// import React from 'react';
// import ReactPlayer from 'react-player';

// const LandingPage = () => {
//   React.useEffect(() => {
//     // Define an array of script URLs to load
//     const scriptUrls = [
//       '/vendor/css/bundle.min.css',
//       '/vendor/js/bundle.min.js',
//       '/vendor/js/jquery.fancybox.min.js',
//       '/vendor/js/owl.carousel.min.js',
//       '/vendor/js/swiper.min.js',
//       '/vendor/js/jquery.cubeportfolio.min.js',
//       '/vendor/js/jquery.appear.js',
//       '/vendor/js/parallaxie.min.js',
//       '/vendor/js/wow.min.js',
//       '/ad-agency/js/owl.carousel.js',
//       '/vendor/js/slick.min.js',
//       '/ad-agency/js/TweenMax.min.js',
//       '/ad-agency/js/morphext.min.js',
//       '/vendor/js/jquery.themepunch.tools.min.js',
//       '/vendor/js/jquery.themepunch.revolution.min.js',
//       '/vendor/js/extensions/revolution.extension.actions.min.js',
//       '/vendor/js/extensions/revolution.extension.carousel.min.js',
//       '/vendor/js/extensions/revolution.extension.kenburn.min.js',
//       '/vendor/js/extensions/revolution.extension.layeranimation.min.js',
//       '/vendor/js/extensions/revolution.extension.migration.min.js',
//       '/vendor/js/extensions/revolution.extension.navigation.min.js',
//       '/vendor/js/extensions/revolution.extension.parallax.min.js',
//       '/vendor/js/extensions/revolution.extension.slideanims.min.js',
//       '/vendor/js/extensions/revolution.extension.video.min.js',
//       // Google Maps API (loaded separately)
//       'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY', // Replace YOUR_API_KEY with your Google Maps API key
//       '/ad-agency/js/maps.min.js',
//       '/ad-agency/js/script.js',
//     ];

//     // Load each script dynamically
//     scriptUrls.forEach((url) => {
//       const script = document.createElement('script');
//       script.src = url;
//       script.async = true;
//       document.body.appendChild(script);
//     });

//     // Clean up: remove all dynamically added scripts from the DOM on component unmount
//     return () => {
//       scriptUrls.forEach((url) => {
//         const scriptElement = document.querySelector(`script[src="${url}"]`);
//         if (scriptElement) {
//           document.body.removeChild(scriptElement);
//         }
//       });
//     };
//   }, []); // Empty dependency array ensures this runs only once
//   return (
//     <div>
//       <>
//         {/* Meta Tags */}
//         <meta charSet="utf-8" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         {/* description */}
//         <meta
//           name="description"
//           content="Diamdus is a highly creative, modern, visually stunning and Bootstrap responsive multipurpose agency and HTML5 template with 14 ready home page demos."
//         />
//         {/* keywords */}
//         <meta
//           name="keywords"
//           content="creative, modern, clean, bootstrap responsive, html5, css3, portfolio, blog, agency, templates, multipurpose, one page, corporate, start-up, studio, branding, designer, freelancer, carousel, parallax, photography, personal, masonry, grid, faq"
//         />
//         {/* Page Title */}
//         <title>Diamdus One Marketplace</title>
//         {/* Favicon */}
//         <link rel="icon" href="/ad-agency/img/favicon.ico" />
//         {/* Bundle */}
//         <link rel="stylesheet" href="/vendor/css/bundle.min.css" />
//         {/* Plugin Css */}
//         <link rel="stylesheet" href="/vendor/css/jquery.fancybox.min.css" />
//         <link rel="stylesheet" href="/ad-agency/css/owl.carousel.min.css" />
//         <link
//           rel="stylesheet"
//           href="/ad-agency/css/owl.theme.default.min.css"
//         />
//         <link rel="stylesheet" href="/vendor/css/swiper.min.css" />
//         <link rel="stylesheet" href="/vendor/css/cubeportfolio.min.css" />
//         {/* Revolution Slider CSS Files */}
//         <link rel="stylesheet" href="/ad-agency/css/navigation.css" />
//         <link rel="stylesheet" href="/ad-agency/css/settings.css" />
//         {/* Slick CSS Files */}
//         <link rel="stylesheet" href="/vendor/css/slick.css" />
//         <link rel="stylesheet" href="/vendor/css/slick-theme.css" />
//         {/* Style Sheet */}
//         <link rel="stylesheet" href="/ad-agency/css/style.css" />
//         {/* Custom Style CSS File */}
//         <link rel="stylesheet" href="/ad-agency/css/custom.css" />
//         {/* Loader */}
//         {/* <div className="loader" id="loader-fade">
// <div className="dot-container">
//   <div className="dot dot-1"></div>
//   <div className="dot dot-2"></div>
//   <div className="dot dot-3"></div>
// </div>

// <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
//   <defs>
//     <filter id="goo">
//       <feGaussianBlur
//         in="SourceGraphic"
//         stdDeviation="10"
//         result="blur"
//       ></feGaussianBlur>
//       <feColorMatrix
//         in="blur"
//         mode="matrix"
//         values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
//       ></feColorMatrix>
//     </filter>
//   </defs>
// </svg>
//     </div> */}
//         {/* Loader ends */}
//         {/* Header start */}
//         <section className="top-header cursor-light">
//           <div className="row no-gutters">
//             <div className="col-6 col-lg-4">
//               <div className="slider-icons">
//                 <ul className="slider-social banner-social d-flex">
//                   <li className="animated-wrap">
//                     <a className="animated-element" href="javascript:void(0);">
//                       <i className="fab fa-facebook-f" />
//                     </a>
//                   </li>
//                   <li className="animated-wrap">
//                     <a className="animated-element" href="javascript:void(0);">
//                       <i className="fab fa-twitter" />
//                     </a>
//                   </li>
//                   <li className="animated-wrap">
//                     <a className="animated-element" href="javascript:void(0);">
//                       <i className="fab fa-linkedin-in" />
//                     </a>
//                   </li>
//                   <li className="animated-wrap">
//                     <a className="animated-element" href="javascript:void(0);">
//                       <i className="fab fa-instagram" />
//                     </a>
//                   </li>
//                   <li className="animated-wrap">
//                     <div className="text-white mt-1">Login</div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-6 col-lg-4 d-flex align-items-center justify-content-end justify-content-lg-center">
//               <a className="menu_bars menu-bars-setting sidemenu_toggle link mr-3 mr-lg-0">
//                 <div className="menu-lines">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               </a>
//             </div>
//             <div className="col-4 d-flex justify-content-end">
//               <a
//                 href="javascript:void(0)"
//                 className="btn-setting link btn-hvr-up btn-hvr-whatsapp color-white mr-lg-4 d-none d-lg-inline-block"
//               >
//                 <i className="fab fa-whatsapp" /> +91 9702656949
//               </a>
//             </div>
//           </div>
//         </section>
//         <header className="cursor-light">
//           <nav className="navbar navbar-top-default navbar-expand-lg nav-three-circles bottom-nav nav-box-shadow no-animation">
//             <div className="container-fluid">
//               <a className="logo ml-lg-1" href="javascript:void(0)">
//                 <img
//                   src="/ad-agency/img/logo1.png"
//                   className="logo-default"
//                   alt="logo"
//                   title="Logo"
//                 />
//               </a>
//               <div className="collapse navbar-collapse d-none d-lg-block">
//                 <ul className="nav navbar-nav mx-auto">
//                   <li className="nav-item">
//                     <a href="#home" className="scroll nav-link link">
//                       home
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#about" className="scroll nav-link link">
//                       about
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#work" className="scroll nav-link link">
//                       work
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#pricing" className="scroll nav-link link">
//                       pricing
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#clients" className="scroll nav-link link">
//                       clients
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#blog" className="scroll nav-link link">
//                       blog
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#contact" className="scroll nav-link link">
//                       contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <a
//                 href="javascript:void(0)"
//                 className="nav-btn-number btn-setting btn-hvr-up btn-hvr-whatsapp color-white mr-lg-3"
//               >
//                 <i className="fab fa-whatsapp" /> +91 9702656949
//               </a>
//               {/* side menu open button */}
//               <div className="menu-btn">
//                 <a className="menu_bars menu-bars-setting animated-wrap sidemenu_toggle">
//                   <div className="menu-lines animated-element">
//                     <span />
//                     <span />
//                     <span />
//                   </div>
//                 </a>
//               </div>
//               {/* Side Menu */}
//             </div>
//           </nav>
//           {/* side menu open button */}
//           {/*    <a className="menu_bars menu-bars-setting animated-wrap sidemenu_toggle d-lg-inline-block d-none">*/}
//           {/*        <div className="menu-lines animated-element">*/}
//           {/*            <span></span>*/}
//           {/*            <span></span>*/}
//           {/*            <span></span>*/}
//           {/*        </div>*/}
//           {/*    </a>*/}
//           {/* Side Menu */}
//           <div className="side-menu   ">
//             <div className="quarter-circle">
//               <div className="menu_bars2 active" id="btn_sideNavClose">
//                 <span />
//                 <span />
//                 <span />
//               </div>
//             </div>
//             <div className="inner-wrapper justify-content-center">
//               <div className="col-md-12 text-center">
//                 <a href="javascript:void(0)" className="logo-full mb-4">
//                   <img src="/ad-agency/img/logo-pure-white.png" alt="" />
//                 </a>
//               </div>
//               <nav className="side-nav m-0">
//                 <ul className="navbar-nav flex-lg-row">
//                   <li className="nav-item">
//                     <a href="#home" className="scroll nav-link link">
//                       home
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#about" className="scroll nav-link link">
//                       about
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#work" className="scroll nav-link link">
//                       work
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#pricing" className="scroll nav-link link">
//                       pricing
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#clients" className="scroll nav-link link">
//                       clients
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#blog" className="scroll nav-link link">
//                       blog
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="#contact" className="scroll nav-link link">
//                       contact
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//               <div className="side-footer text-white w-100">
//                 <ul className="social-icons-simple">
//                   <li className="side-menu-icons">
//                     <a href="javascript:void(0)">
//                       <i className="fab fa-facebook-f color-white" />
//                     </a>
//                   </li>
//                   <li className="side-menu-icons">
//                     <a href="javascript:void(0)">
//                       <i className="fab fa-instagram color-white" />
//                     </a>
//                   </li>
//                   <li className="side-menu-icons">
//                     <a href="javascript:void(0)">
//                       <i className="fab fa-twitter color-white" />
//                     </a>
//                   </li>
//                 </ul>
//                 <p className="text-white">© 2024 Diamdus</p>
//               </div>
//             </div>
//           </div>
//           <a id="close_side_menu" href="javascript:void(0);" />
//           {/*Side Menu*/}
//         </header>
//         {/* Header end */}
//         {/* Main Section start */}
//         <section id="home" className="p-0 h-100vh cursor-light">
//           <h2 className="d-none">heading</h2>
//           {/*Main Slider*/}
//           <div
//             id="rev_slider_8_1_wrapper"
//             className="rev_slider_wrapper fullscreen-container"
//             data-alias="weone"
//             data-source="gallery"
//             style={{ background: 'transparent', padding: 0 }}
//           >
//             {/* START REVOLUTION SLIDER 5.4.8.1 fullscreen mode */}
//             <div
//               id="rev_slider_8_1"
//               className="rev_slider fullscreenbanner"
//               style={{ display: 'none' }}
//               data-version="5.4.8.1"
//             >
//               <ul>
//                 {/* SLIDE  */}
//                 {/* SLIDE 1 */}
//                 <li
//                   data-index="rs-36"
//                   data-transition="fade"
//                   data-slotamount="default"
//                   data-hideafterloop={0}
//                   data-hideslideonmobile="off"
//                   data-easein="default"
//                   data-easeout="default"
//                   data-masterspeed={300}
//                   data-rotate={0}
//                   data-saveperformance="off"
//                   data-title="Slide"
//                   data-param1=""
//                   data-param2=""
//                   data-param3=""
//                   data-param4=""
//                   data-param5=""
//                   data-param6=""
//                   data-param7=""
//                   data-param8=""
//                   data-param9=""
//                   data-param10=""
//                   data-description=""
//                 >
//                   {/* LAYERS */}
//                   <img
//                     src="/ad-agency/img/slider-img.jpg"
//                     data-bgposition="center center"
//                     data-bgfit="cover"
//                     data-bgrepeat="no-repeat"
//                     data-bgparallax="off"
//                     className="rev-slidebg"
//                     alt="slider-image"
//                     data-no-retina=""
//                   />
//                   <div className="banner-overlay" />
//                   {/* LAYERS */}

//                   <div
//                     className="rs-background-video-layer"
//                     data-forcerewind="on"
//                     data-volume="mute"
//                     data-videowidth="100%"
//                     data-videoheight="100vh"
//                     data-videomp4="https://hicharge.in/wp-content/uploads/2024/05/Untitled-design-1.mp4"
//                     data-videopreload="auto"
//                     data-videoloop="loopandnoslidestop"
//                     data-forcecover={1}
//                     data-aspectratio="16:9"
//                     data-autoplay="true"
//                     data-autoplayonlyfirsttime="true"
//                   />
//                   {/* LAYER Text */}
//                   <div
//                     className="tp-caption color-yellow"
//                     data-x="['center','center','center','center']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['270','200','100','15']"
//                     data-fontsize="['60','50','40','40']"
//                     data-lineheight="['75','75','75','40']"
//                     data-width="['556','556','556','300']"
//                     data-height="['none','none','none','87']"
//                     data-whitespace="nowrap"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[{"delay":100,"split":"chars","splitdelay":0.1,"speed":1480,"split_direction":"random","frame":"0","from":"y:50px;sX:1;sY:1;opacity:0;fb:20px;","color":"rgba(0,0,0,0)","to":"o:1;fb:0;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","color":"transparent","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
//                     data-textalign="['center','center','center','center']"
//                     data-paddingtop="[0,0,0,0]"
//                     data-paddingright="[0,0,0,0]"
//                     data-paddingbottom="[0,0,0,0]"
//                     data-paddingleft="[0,0,0,0]"
//                     style={{
//                       zIndex: 10,
//                       minWidth: 556,
//                       maxWidth: 556,
//                       whiteSpace: 'nowrap',
//                       fontSize: 60,
//                       lineHeight: 75,
//                       fontWeight: 300,
//                       letterSpacing: 0,
//                       fontFamily: '"Montserrat", sans-serif',
//                     }}
//                   >
//                     <img
//                       src="/ad-agency/img/logo1.png"
//                       className="link"
//                       alt="logo"
//                     />
//                   </div>
//                   {/* LAYER Text */}
//                   <div
//                     className="tp-caption color-white"
//                     data-x="['center','center','center','center']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['368','260','155','105']"
//                     data-fontsize="['62','50','40','40']"
//                     data-lineheight="['75','75','45','45']"
//                     data-width="['556','556','556','350']"
//                     data-height="['none','none','none','87']"
//                     data-whitespace="nowrap"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[{"delay":150,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
//                     data-textalign="['center','center','center','center']"
//                     data-paddingtop="[0,0,0,0]"
//                     data-paddingright="[0,0,0,0]"
//                     data-paddingbottom="[0,0,0,0]"
//                     data-paddingleft="[0,0,0,0]"
//                     style={{
//                       zIndex: 10,
//                       minWidth: 556,
//                       maxWidth: 556,
//                       whiteSpace: 'nowrap',
//                       fontWeight: 500,
//                       letterSpacing: 0,
//                       fontFamily: '"Montserrat", sans-serif',
//                     }}
//                   >
//                     <div id="js-rotating">
//                       Diamond Market Place, Modern Works, Easy to Use
//                     </div>
//                   </div>
//                   {/* LAYER Text */}
//                   <div
//                     className="tp-caption color-white"
//                     data-x="['center','center','center','center']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','middle','middle','middle']"
//                     data-voffset="['470','95','0','20']"
//                     data-whitespace="normal"
//                     data-width="['580','630','550','440']"
//                     data-fontsize="['20','15','15','15']"
//                     data-lineheight="['30','25','22','22']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[{"delay":100,"speed":1480,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
//                     data-textalign="['center','center','center','center']"
//                     data-paddingtop="[0,0,0,0]"
//                     data-paddingright="[0,0,0,0]"
//                     data-paddingbottom="[0,0,0,0]"
//                     data-paddingleft="[0,0,0,0]"
//                     style={{
//                       zIndex: 10,
//                       minWidth: 650,
//                       maxWidth: 650,
//                       whiteSpace: 'nowrap',
//                       fontWeight: 300,
//                       letterSpacing: 1,
//                       fontFamily: '"Source Sans Pro", sans-serif',
//                     }}
//                   >
//                     Buy &amp; Sell Best Quality Diamonds Online for Pocket -
//                     Friendly Prices! <br />
//                     Diverse Inventory Collection <br />
//                     Innovative Interface
//                   </div>
//                   {/* LAYER Button */}
//                   <div
//                     className="tp-caption tp-resizeme"
//                     data-x="['center','center','center','center']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['middle','middle','middle','middle']"
//                     data-voffset="['170','200','90','120']"
//                     data-frames='[{"from":"y:50px;opacity:0;","speed":1000,"to":"o:1;","delay":800,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:2px 2px 2px 2px;"}]'
//                     data-textalign="['center','center','center','center']"
//                     data-width="['160','160','160','160']"
//                     style={{ zIndex: 10, minWidth: 960, maxWidth: 960 }}
//                   >
//                     <a
//                       href="javascript:void(0)"
//                       className="btn-setting color-white btn-hvr-up btn-hvr-yellow link"
//                     >
//                       learn more
//                     </a>
//                   </div>
//                 </li>
//               </ul>
//               <div
//                 className="tp-bannertimer"
//                 style={{ height: 5, background: 'rgba(0, 0, 0, 0.15)' }}
//               />
//             </div>
//           </div>
//           {/*Main Slider ends */}
//         </section>
//         {/* Main Section end */}
//         {/*About start*/}
//         <section className="about overflow-visible bg-dark1" id="about">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 pr-5 mb-5 mb-lg-0 wow fadeInLeft">
//                 <div className="rare-box" />
//                 <img
//                   src="/ad-agency/img/about.jpg"
//                   className="about-img-small position-relative w-100"
//                   alt=""
//                 />
//               </div>
//               <div className="col-lg-6 pl-6">
//                 <div
//                   className="main-title text-lg-left offset-md-1 mb-0 wow fadeInUp"
//                   data-wow-delay="300ms"
//                 >
//                   <h5 className="wow fadeInUp" data-wow-delay="300ms">
//                     Diamdus
//                   </h5>
//                   <h2
//                     className="wow fadeInUp font-weight-light"
//                     data-wow-delay="400ms"
//                   >
//                     We are making <span className="color-pink">design</span>{' '}
//                     better for everyone
//                   </h2>
//                   <p className="pb-4 wow fadeInUp" data-wow-delay="500ms">
//                     A diamond marketplace providing APIs to mobile app
//                     development and custom CAD files offers a comprehensive
//                     solution for diamond retailers. Here are some aspects that
//                     you might want to consider or highlight about your business:
//                   </p>
//                   <ul
//                     className="pb-5 text-left wow fadeInUp"
//                     data-wow-delay="600ms"
//                   >
//                     <li>API Integration</li>
//                     <li>Custom CAD Design</li>
//                     <li>One-Stop Solution</li>
//                     <li>Quality Assurance</li>
//                     <li>Security Measures</li>
//                   </ul>
//                   <a
//                     href="javascript:void(0)"
//                     className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-pink text-white link wow fadeInUp"
//                     data-wow-delay="700ms"
//                   >
//                     learn more
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/*About end*/}
//         {/* About Boxes start */}
//         <section className="bg-dark2">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="main-title wow fadeIn" data-wow-delay="300ms">
//                   <h2>
//                     We’re
//                     <span className="color-pink">Diamond Store</span> Branding
//                     <br />
//                     and Technology Identity{' '}
//                     <span className="color-blue">Agency</span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-4 col-md-6 col-12">
//                 <div className="about-box mb-5 mb-lg-0 mx-auto bg-blue">
//                   <span className="pro-step d-inline-block color-white">
//                     <i className="fa fa-pencil-alt" />
//                   </span>
//                   <h5 className="font-weight-500 color-white mt-25px mb-15px text-capitalize">
//                     branding design
//                   </h5>
//                   <p className="font-weight-light color-white">
//                     Lorem dapibus, tortor eget turpis auctor, convallis odio ac.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-12">
//                 <div className="about-box mb-5 mb-lg-0 mx-auto bg-yellow">
//                   <span className="pro-step d-inline-block color-white">
//                     <i className="fa fa-cog" />
//                   </span>
//                   <h5 className="font-weight-500 color-white mt-25px mb-15px">
//                     SEO Marketing
//                   </h5>
//                   <p className="font-weight-light color-white">
//                     Etiam luctus, lacus maximus elementum dapibus felis.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-12 col-12">
//                 <div className="about-box mb-0 mx-auto bg-pink">
//                   <span className="pro-step d-inline-block color-white">
//                     <i className="fa fa-code" />
//                   </span>
//                   <h5 className="font-weight-500 color-white mt-25px mb-15px text-capitalize">
//                     web development
//                   </h5>
//                   <p className="font-weight-light color-white">
//                     Pellentesque habitant morbi tristique senectus et malesuada.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* About Boxes ends */}
//         {/* Team start */}
//         {/* <section id="team" className="bg-light-gray bg-dark1">
// <div className="container">
//   <div className="row">
//     <div className="col-md-12">
//       <div className="main-title wow fadeIn" data-wow-delay="300ms">
//         <h5>Lorem ipsum dolor sit amet</h5>
//         <h2 className="mb-0">
//           Our <span className="color-pink">Creative</span> Team
//         </h2>
//       </div>
//     </div>
//   </div>
//   <div className="row wow fadeInUp team" data-wow-delay="300">
//     <div
//       className="col-lg-6 col-xl-3 p-0 team-col ml-md-auto mr-md-0 mx-auto"
//     >
//       <div className="team-image">
//         <img src="/ad-agency/img/team1.jpg" alt="team1" className="m-image1" />
//       </div>
//       <div className="team-classic-content hvr-team pink">
//         <h3 className="mb-3 text-capitalize color-black">Jessica Jones</h3>
//         <h5 className="mb-3 text-capitalize color-pink">Lead Designer</h5>
//         <p className="mt-3 mb-3 color-black">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.
//         </p>
//         <ul className="team-social">
//           <li className="d-inline-block">
//             <a href="javascript:void(0)" className="facebook-bg-hvr"
//               ><i className="fab fa-facebook-f" aria-hidden="true"></i
//             ></a>
//           </li>
//           <li className="d-inline-block">
//             <a href="javascript:void(0)" className="twitter-bg-hvr"
//               ><i className="fab fa-twitter" aria-hidden="true"></i
//             ></a>
//           </li>
//           <li className="d-inline-block">
//             <a href="javascript:void(0)" className="google-bg-hvr"
//               ><i className="fab fa-google" aria-hidden="true"></i
//             ></a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div
//       className="col-lg-6 col-xl-3 p-0 team-col2 mr-md-auto ml-md-0 mx-auto"
//     >
//       <div className="row">
//         <div className="col-md-12 order-md-1">
//           <div className="team-image">
//             <img
//               src="/ad-agency/img/team2.jpg"
//               alt="team2"
//               className="m-image2"
//             />
//           </div>
//         </div>
//         <div className="col-md-12 order-md-0">
//           <div className="team-classic-content hvr-team2 blue">
//             <h3 className="mb-3 text-capitalize color-black">Rob Clark</h3>
//             <h5 className="mb-3 text-capitalize color-blue">
//               marketing head
//             </h5>
//             <p className="mt-3 mb-3 color-black">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit
//               augue.
//             </p>
//             <ul className="team-social">
//               <li className="d-inline-block">
//                 <a href="javascript:void(0)" className="facebook-bg-hvr"
//                   ><i className="fab fa-facebook-f" aria-hidden="true"></i
//                 ></a>
//               </li>
//               <li className="d-inline-block">
//                 <a href="javascript:void(0)" className="twitter-bg-hvr"
//                   ><i className="fab fa-twitter" aria-hidden="true"></i
//                 ></a>
//               </li>
//               <li className="d-inline-block">
//                 <a href="javascript:void(0)" className="google-bg-hvr"
//                   ><i className="fab fa-google" aria-hidden="true"></i
//                 ></a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="w-100 d-none d-lg-block d-xl-none"></div>
//     <div
//       className="col-lg-6 col-xl-3 p-0 team-col ml-md-auto mr-md-0 mx-auto team-row2"
//     >
//       <div className="team-image">
//         <img src="/ad-agency/img/team3.jpg" alt="team3" className="m-image3" />
//       </div>
//       <div className="team-classic-content hvr-team yellow">
//         <h3 className="mb-3 text-capitalize color-black">Nicole Cross</h3>
//         <h5 className="mb-3 text-capitalize color-yellow">Visualizer</h5>
//         <p className="mt-3 mb-3 color-black">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.
//         </p>
//         <ul className="team-social">
//           <li className="d-inline-block">
//             <a href="javascript:void(0)" className="facebook-bg-hvr"
//               ><i className="fab fa-facebook-f" aria-hidden="true"></i
//             ></a>
//           </li>
//           <li className="d-inline-block">
//             <a href="javascript:void(0)" className="twitter-bg-hvr"
//               ><i className="fab fa-twitter" aria-hidden="true"></i
//             ></a>
//           </li>
//           <li className="d-inline-block">
//             <a href="javascript:void(0)" className="google-bg-hvr"
//               ><i className="fab fa-google" aria-hidden="true"></i
//             ></a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div
//       className="col-lg-6 col-xl-3 p-0 team-col2 mr-md-auto ml-md-0 mx-auto team-row2"
//     >
//       <div className="row">
//         <div className="col-md-12 order-md-1">
//           <div className="team-image2">
//             <img
//               src="/ad-agency/img/team4.jpg"
//               alt="team4"
//               className="m-image2"
//             />
//           </div>
//         </div>
//         <div className="col-md-12 order-md-0">
//           <div className="team-classic-content hvr-team2 pink">
//             <h3 className="mb-3 text-capitalize color-black">
//               Albert Rodricks
//             </h3>
//             <h5 className="mb-3 text-capitalize color-pink">Creative Lead</h5>
//             <p className="mt-3 mb-3 color-black">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit
//               augue.
//             </p>
//             <ul className="team-social">
//               <li className="d-inline-block">
//                 <a href="javascript:void(0)" className="facebook-bg-hvr"
//                   ><i className="fab fa-facebook-f" aria-hidden="true"></i
//                 ></a>
//               </li>
//               <li className="d-inline-block">
//                 <a href="javascript:void(0)" className="twitter-bg-hvr"
//                   ><i className="fab fa-twitter" aria-hidden="true"></i
//                 ></a>
//               </li>
//               <li className="d-inline-block">
//                 <a href="javascript:void(0)" className="google-bg-hvr"
//                   ><i className="fab fa-google" aria-hidden="true"></i
//                 ></a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </section> */}
//         {/* Team ends */}
//         {/* Quote start */}
//         <section className="parallax-setting parallaxie parallax1">
//           <h2 className="d-none">heading</h2>
//           <div className="container">
//             <div className="row align-items-center position-relative">
//               <div className="col-md-12">
//                 <div
//                   className="quote-text text-center wow fadeInRight"
//                   data-wow-delay="300ms"
//                 >
//                   <div className="quote d-flex justify-content-start mb-2rem">
//                     <i className="fa fa-quote-left" />
//                   </div>
//                   <h2 className="font-weight-light mb-5 line-height-normal text-white">
//                     <span className="color-yellow">Creativity</span> is allowing
//                     yourself to make mistakes Art is knowing which ones to keep.
//                   </h2>
//                   <h3 className="color-pink">Alice Johnson</h3>
//                   <div className="quote d-flex justify-content-end mb-3">
//                     <i className="fa fa-quote-right" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Quote ends */}
//         {/* Work Starts */}
//         <section id="work" className="pb-0 bg-dark1">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="main-title wow fadeIn" data-wow-delay="300ms">
//                   <h5>Lorem ipsum dolor sit amet</h5>
//                   <h2 className="mb-0">
//                     Creative<span className="color-pink"> Portfolio</span>
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="row d-block">
//               <div
//                 id="js-filters-mosaic-flat"
//                 className="cbp-l-filters-alignCenter"
//               >
//                 <div
//                   data-filter="*"
//                   className="cbp-filter-item-active cbp-filter-item cbp-filter-style"
//                 >
//                   All
//                   <div className="cbp-filter-counter" />
//                 </div>
//                 <div
//                   data-filter=".graphic-designs"
//                   className="cbp-filter-item cbp-filter-style"
//                 >
//                   Graphic Designs
//                   <div className="cbp-filter-counter" />
//                 </div>
//                 <div
//                   data-filter=".web-designs"
//                   className="cbp-filter-item cbp-filter-style"
//                 >
//                   Web Designs
//                   <div className="cbp-filter-counter" />
//                 </div>
//                 <div
//                   data-filter=".seo"
//                   className="cbp-filter-item cbp-filter-style"
//                 >
//                   SEO
//                   <div className="cbp-filter-counter" />
//                 </div>
//                 <div data-filter=".marketing" className="cbp-filter-item">
//                   Marketing
//                   <div className="cbp-filter-counter" />
//                 </div>
//               </div>
//               <div
//                 id="js-grid-mosaic-flat"
//                 className="cbp cbp-l-grid-mosaic-flat no-transition"
//               >
//                 <div className="cbp-item web-designs marketing">
//                   <a
//                     href="/ad-agency/img/work1.jpg"
//                     className="cbp-caption cbp-lightbox"
//                     data-title="Bolt UI<br>by Tiberiu Neamu"
//                   >
//                     <div className="cbp-caption-defaultWrap">
//                       <img src="/ad-agency/img/work1.jpg" alt="work" />
//                     </div>
//                     <div className="cbp-caption-activeWrap">
//                       <div className="cbp-l-caption-alignCenter">
//                         <div className="cbp-l-caption-body">
//                           <p>Elegant | Images</p>
//                           <div className="cbp-l-caption-title">
//                             We are digital agency
//                           </div>
//                           <span className="work-icon">
//                             <i className="fa fa-arrow-right" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="cbp-item graphic-designs seo">
//                   <a
//                     href="/ad-agency/img/work2.jpg"
//                     className="cbp-caption cbp-lightbox"
//                     data-title="World Clock<br>by Paul Flavius Nechita"
//                   >
//                     <div className="cbp-caption-defaultWrap">
//                       <img src="/ad-agency/img/work2.jpg" alt="work" />
//                     </div>
//                     <div className="cbp-caption-activeWrap">
//                       <div className="cbp-l-caption-alignCenter">
//                         <div className="cbp-l-caption-body">
//                           <p>Elegant | Images</p>
//                           <div className="cbp-l-caption-title">
//                             Creative art work
//                           </div>
//                           <span className="work-icon">
//                             <i className="fa fa-arrow-right" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="cbp-item graphic-designs web-designs">
//                   <a
//                     href="/ad-agency/img/work3.jpg"
//                     className="cbp-caption cbp-lightbox"
//                     data-title="WhereTO App<br>by Tiberiu Neamu"
//                   >
//                     <div className="cbp-caption-defaultWrap">
//                       <img src="/ad-agency/img/work3.jpg" alt="work" />
//                     </div>
//                     <div className="cbp-caption-activeWrap">
//                       <div className="cbp-l-caption-alignCenter">
//                         <div className="cbp-l-caption-body">
//                           <p>Elegant | Images</p>
//                           <div className="cbp-l-caption-title">
//                             Modern portfolio
//                           </div>
//                           <span className="work-icon">
//                             <i className="fa fa-arrow-right" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="cbp-item seo marketing">
//                   <a
//                     href="/ad-agency/img/work6.jpg"
//                     className="cbp-caption cbp-lightbox"
//                     data-title="Remind~Me Widget<br>by Tiberiu Neamu"
//                   >
//                     <div className="cbp-caption-defaultWrap">
//                       <img src="/ad-agency/img/work6.jpg" alt="work" />
//                     </div>
//                     <div className="cbp-caption-activeWrap">
//                       <div className="cbp-l-caption-alignCenter">
//                         <div className="cbp-l-caption-body">
//                           <p>Elegant | Images</p>
//                           <div className="cbp-l-caption-title">
//                             Digital art works
//                           </div>
//                           <span className="work-icon">
//                             <i className="fa fa-arrow-right" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="cbp-item web-designs seo">
//                   <a
//                     href="/ad-agency/img/work4.jpg"
//                     className="cbp-caption cbp-lightbox"
//                     data-title="Seemple* Music<br>by Tiberiu Neamu"
//                   >
//                     <div className="cbp-caption-defaultWrap">
//                       <img src="/ad-agency/img/work4.jpg" alt="work" />
//                     </div>
//                     <div className="cbp-caption-activeWrap">
//                       <div className="cbp-l-caption-alignCenter">
//                         <div className="cbp-l-caption-body">
//                           <p>Elegant | Images</p>
//                           <div className="cbp-l-caption-title">Photography</div>
//                           <span className="work-icon">
//                             <i className="fa fa-arrow-right" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="cbp-item web-designs marketing">
//                   <a
//                     href="/ad-agency/img/work5.jpg"
//                     className="cbp-caption cbp-lightbox"
//                     data-title="iDevices<br>by Tiberiu Neamu"
//                   >
//                     <div className="cbp-caption-defaultWrap">
//                       <img src="/ad-agency/img/work5.jpg" alt="work" />
//                     </div>
//                     <div className="cbp-caption-activeWrap">
//                       <div className="cbp-l-caption-alignCenter">
//                         <div className="cbp-l-caption-body">
//                           <p>Elegant | Images</p>
//                           <div className="cbp-l-caption-title">
//                             Modern workspace
//                           </div>
//                           <span className="work-icon">
//                             <i className="fa fa-arrow-right" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Work ends */}
//         {/* Pricing start */}
//         <section
//           id="pricing"
//           className="bg-light-gray pricing-padding bg-dark2"
//         >
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="main-title wow fadeIn" data-wow-delay="300ms">
//                   <h5>Lorem ipsum dolor sit amet</h5>
//                   <h2 className="mb-0">
//                     Flexible<span className="color-pink"> Pricing</span>{' '}
//                     Packages
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="row mt-66px mt-xs-4rem">
//               <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp">
//                 <div className="pricing-item hvr-bg-blue">
//                   <div className="price-box clearfix">
//                     <div className="price_title">
//                       <h4 className="text-capitalize">Basic</h4>
//                     </div>
//                   </div>
//                   <div className="price">
//                     <h2 className="position-relative">
//                       <span className="dollar">$</span>19
//                       <span className="month">/ month</span>
//                     </h2>
//                   </div>
//                   <div className="price-description">
//                     <p>Full Access</p>
//                     <p>Unlimited Bandwidth</p>
//                     <p>Email Accounts</p>
//                     <p>8 Free Forks Every Months</p>
//                   </div>
//                   <div className="text-center">
//                     <a
//                       href="javascript:void(0)"
//                       className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-white"
//                     >
//                       learn more
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp">
//                 <div className="pricing-item price-transform hvr-bg-yellow">
//                   <div className="quarter-triangle" />
//                   <div className="triangle-inner-content">
//                     <i className="fa fa-star" />
//                     <span> SPECIAL </span>
//                   </div>
//                   <div className="price-box2 clearfix">
//                     <div className="price_title">
//                       <h4 className="text-capitalize m-0">Standard</h4>
//                       <p className="price-sub-heading text-capitalize">
//                         the most popular
//                       </p>
//                     </div>
//                   </div>
//                   <div className="price">
//                     <h2 className="position-relative">
//                       <span className="dollar">$</span>29
//                       <span className="month">/ month</span>
//                     </h2>
//                   </div>
//                   <div className="price-description">
//                     <p>Full Access</p>
//                     <p>Unlimited Bandwidth</p>
//                     <p>Email Accounts</p>
//                     <p>8 Free Forks Every Months</p>
//                   </div>
//                   <div className="text-center">
//                     <a
//                       href="javascript:void(0)"
//                       className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-white"
//                     >
//                       learn more
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-12 col-sm-12 text-center wow fadeInUp">
//                 <div className="pricing-item hvr-bg-pink">
//                   <div className="price-box clearfix">
//                     <div className="price_title">
//                       <h4 className="text-capitalize">Advance</h4>
//                     </div>
//                   </div>
//                   <div className="price">
//                     <h2 className="position-relative">
//                       <span className="dollar">$</span>49
//                       <span className="month">/ month</span>
//                     </h2>
//                   </div>
//                   <div className="price-description">
//                     <p>Full Access</p>
//                     <p>Unlimited Bandwidth</p>
//                     <p>Email Accounts</p>
//                     <p>8 Free Forks Every Months</p>
//                   </div>
//                   <div className="text-center">
//                     <a
//                       href="javascript:void(0)"
//                       className="btn-setting color-black btn-hvr-up btn-pink btn-hvr-white"
//                     >
//                       learn more
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Pricing ends */}
//         {/* Clients start */}
//         <section
//           id="clients"
//           className="bg-white p-0 cursor-light no-transition"
//         >
//           <h2 className="d-none">heading</h2>
//           <div className="section-padding parallax-setting parallaxie parallax2">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="main-title wow fadeIn" data-wow-delay="300ms">
//                     <h5>Lorem ipsum dolor sit amet</h5>
//                     <h2 className="mb-0">
//                       Valuable<span className="color-pink"> Clients</span>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//               <div className="testimonial-images">
//                 <div className="owl-thumbs owl-dots d-lg-block d-none">
//                   <div className="owl-dot animated-wrap active">
//                     <img
//                       src="/ad-agency/img/testimonial1.png"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial2.png"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial3.png"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial4.png"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial5.png"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial6.png"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial7.jpg"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                   <div className="owl-dot animated-wrap">
//                     <img
//                       src="/ad-agency/img/testimonial8.jpg"
//                       alt=""
//                       className="animated-element"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row align-items-center position-relative">
//                 <div className="col-md-12">
//                   <div
//                     className="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn"
//                     data-wow-delay="400ms"
//                   >
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial1.png"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             David Walker
//                           </h5>
//                           <p className="color-white">Chairman, AcroEx</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item hide-cursor">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial2.png"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Christina Williams
//                           </h5>
//                           <p className="color-white">HR Manager</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial3.png"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Sarah Jones
//                           </h5>
//                           <p className="color-white">Sales Executive</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial4.png"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Chris Gorgano
//                           </h5>
//                           <p className="color-white">Photographer</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial5.png"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Kate Carter
//                           </h5>
//                           <p className="color-white">Model</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial6.png"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Alex Curtis
//                           </h5>
//                           <p className="color-white">Manager</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial7.jpg"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Ashley Wilson
//                           </h5>
//                           <p className="color-white">Actor</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="testimonial-item">
//                       <p className="color-white testimonial-para mb-15px">
//                         Curabitur mollis bibendum luctus. Duis suscipit vitae
//                         dui sed suscipit. Vestibulum auctor nunc vitae diam
//                         eleifend, in maximus metus sollicitudin. Quisque vitae
//                         sodales lectus. Nam porttitor justo sed mi finibus, vel
//                         tristique risus faucibus.
//                       </p>
//                       <div className="testimonial-post">
//                         <a href="javascript:void(0)" className="post">
//                           <img
//                             src="/ad-agency/img/testimonial8.jpg"
//                             alt="image"
//                           />
//                         </a>
//                         <div className="text-content">
//                           <h5 className="color-white text-capitalize">
//                             Johnny Perkins
//                           </h5>
//                           <p className="color-white">Athlete</p>
//                           <div className="rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Clients ends */}
//         {/* Blog start */}
//         <section id="blog" className="half-section p-0 bg-change bg-yellow">
//           <h2 className="d-none">heading</h2>
//           <div className="container-fluid">
//             <div className="row align-items-center">
//               <div className="col-lg-6 col-md-12 p-0">
//                 <div className="hover-effect">
//                   <img
//                     alt="blog"
//                     src="/ad-agency/img/split-blog.jpg"
//                     className="about-img"
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-12 p-lg-0">
//                 <div className="split-container-setting style-three text-center">
//                   <div
//                     className="main-title mb-5 wow fadeIn"
//                     data-wow-delay="300ms"
//                   >
//                     <h5 className="font-18 text-blue">Oct 12, 2019</h5>
//                     <h2 className="mb-0 font-weight-normal">Agency Blog</h2>
//                   </div>
//                   <p className="color-black mb-5">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eiusmodt temp to the incididunt ut labore et dolore
//                     magna aliqua. Ut enim ad minim veniam, quis a nostr a
//                     exercitation ullamco laboris nisi ut aliquip.
//                   </p>
//                   <a
//                     href="/ad-agency/blog.html"
//                     className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-pink"
//                   >
//                     learn more
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Blog ends */}
//         {/* Contact & Map starts */}
//         <section id="contact" className="bg-light-gray bg-dark1">
//           <div className="container">
//             <div className="row mx-lg-0">
//               <div className="col-lg-6 col-md-6 col-sm-12 p-0">
//                 <div className="contact-box bg-dark2">
//                   <div className="main-title text-center text-md-left mb-4">
//                     <h2 className="font-weight-normal">Connect With Us</h2>
//                   </div>
//                   <div className="text-center text-md-left">
//                     {/*Address*/}
//                     <p className="mb-3">
//                       123 Street New York City , United Kingdom.
//                     </p>
//                     {/*Phone*/}
//                     <p className="mb-3">
//                       Office Telephone : +91 9702656949 <br />
//                       Mobile : 001 9702656949
//                     </p>
//                     {/*Email*/}
//                     <p className="mb-3">
//                       Email:
//                       <a
//                         href="mailto:email@website.com"
//                         className="color-white"
//                       >
//                         admin@website.com
//                       </a>
//                       <br />
//                       Inquiries:
//                       <a
//                         href="mailto:email@website.com"
//                         className="color-white"
//                       >
//                         email@website.com
//                       </a>
//                     </p>
//                     {/*Timing*/}
//                     <p className="mb-0">Mon-Sat: 9am to 6pm</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 p-0 col-map box-shadow-map">
//                 <div id="google-map" className="bg-light-gray map" />
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Contact & Map ends */}
//         {/* Footer starts */}
//         <footer className="p-half bg-dark2">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 col-sm-12 text-center">
//                 <ul className="footer-icons mb-4">
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="wow fadeInUp facebook"
//                     >
//                       <i className="fab fa-facebook-f" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="wow fadeInDown twitter"
//                     >
//                       <i className="fab fa-twitter" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="wow fadeInUp google"
//                     >
//                       <i className="fab fa-google" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="wow fadeInDown linkedin"
//                     >
//                       <i className="fab fa-linkedin-in" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="wow fadeInUp instagram"
//                     >
//                       <i className="fab fa-instagram" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="javascript:void(0)"
//                       className="wow fadeInDown pinterest"
//                     >
//                       <i className="fab fa-pinterest-p" />
//                     </a>
//                   </li>
//                 </ul>
//                 <p className="copyrights mt-2 mb-2">
//                   © 2024 Diamdus.
//                   <a href="javascript:void(0)" />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </footer>
//         {/* Footer ends */}
//         {/*Animated Cursor*/}
//         <div id="animated-cursor">
//           <div id="cursor">
//             <div id="cursor-loader" />
//           </div>
//         </div>
//         {/*Animated Cursor End*/}
//         {/* JavaScript */}
//         {/* Plugin Js */}
//         {/* Owl Carousel JS File */}
//         {/* Slick JS File */}
//         {/* Tween Max Animation File */}
//         {/* Morphtext File */}
//         {/* REVOLUTION JS FILES */}
//         {/* SLIDER REVOLUTION EXTENSIONS */}
//         {/* Google Map Api */}
//         {/* custom script */}
//       </>
//     </div>
//   );
// };

// export default LandingPage;
