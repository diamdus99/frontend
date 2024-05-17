import React from 'react';
import Iframe from 'react-iframe';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { TiWorld } from 'react-icons/ti';
import { RiTeamFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Diamdus
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <Link to={`/login`} className="text-blue-700">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Login
              </a>
            </Link>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up
            </a>
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company{' '}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
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
                  className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
                >
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul
                      className="space-y-4"
                      aria-labelledby="mega-menu-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Pro Version
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Playground
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
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
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="flex bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <video
          className="p-0 m-0 object-fill"
          src="https://hicharge.in/wp-content/uploads/2024/05/Untitled-design-1.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We are world’s potential Diamond Marketplace
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Diamdus we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section class="ji gp uq 2xl:ud-py-35 pg">
        <div class="bb ze ki xn wq">
          <div class="tc wf gg qq">
            {/* <!-- About Images --> */}
            <div class="animate_left xc gn gg jn/2 i">
              <div>
                <img src="shape-05.svg" alt="Shape" class="h -ud-left-5 x" />
                <img src="about-01.png" alt="About" class="ib" />
                <img src="about-02.png" alt="About" />
              </div>
              <div>
                <img src="shape-06.svg" alt="Shape" />
                <img src="about-03.png" alt="About" class="ob gb" />
                <img src="shape-07.svg" alt="Shape" class="bb" />
              </div>
            </div>

            {/* <!-- About Content --> */}
            <div class="animate_right jn/2">
              <h4 class="ek yj mk gb">Why Choose Us</h4>
              <h2 class="fk vj zp pr kk wm qb">
                We Make Our customers happy by giving Best services.
              </h2>
              <p class="uo">
                <b>Buyer</b> -The smartest way to buy diamonds.Online Retailers
                Obtain the best diamonds at the right price using DIAMDUS.
                <br />
                <br />
                <b>Industry</b>-leading market data. Give your clients greater
                choice, benefit from our expert services, and enjoy fast
                delivery and liabilities cover at no extra charge.
                <br />
                <br />
                <b> Sellers</b> The smartest way to sell diamonds. Reach new
                customers, effortlessly Supply and demand analysis A marketplace
                of ready buyers Solution- Everything you need to grow your
                business .
                <br />
                <br />
                <b>Professional Services at your service</b> We take care of the
                back office and logistics, saving you time and money.
                Super-fast, free delivery
              </p>

              <a
                href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                data-fslightbox
                class="vc wf hg mb"
              >
                <span class="tc wf xf be dd rg i gh ua">
                  <span class="nf h vc yc vd rg gh qk -ud-z-1"></span>
                  <img src="images/icon-play.svg" alt="Play" />
                </span>
                <span class="kk">SEE HOW WE WORK</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="pt-9 pb-9 ">
        <div class="bb ze ki yn 2xl:ud-px-12.5">
          <div class="tc uf zo xf ap zf bp mq">
            {/* <!-- Small Features Item --> */}
            <div class="animate_top kn to/3 tc cg oq">
              <div class="tc wf xf cf ae cd rg mh">
                <MdOutlineSupportAgent color="white" size={40} />
              </div>
              <div>
                <h4 class="ek yj go kk wm xb">24/7 Support</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div class="animate_top kn to/3 tc cg oq">
              <div class="tc wf xf cf ae cd rg nh">
                <TiWorld color="white" size={40} />
              </div>
              <div>
                <h4 class="ek yj go kk wm xb">Take Ownership</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Small Features Item --> */}
            <div class="animate_top kn to/3 tc cg oq">
              <div class="tc wf xf cf ae cd rg oh">
                <RiTeamFill color="white" size={40} />

                {/* <img src="images/icon-03.svg" alt="Icon" /> */}
              </div>
              <div>
                <h4 class="ek yj go kk wm xb">Team Work</h4>
                <p>Lorem ipsum dolor sit amet conse adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at Diamdus we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
                className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </a>
            </div>
          </div>
          <div>
            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <div className="bb ye i z-10 ki xn dr bg-blue-500 pt-6 pb-6">
        <div className="tc uf sn tn un gg">
          <div className="animate_left to/2">
            <h2 className="fk vj zp pr lk ac">
              Join with 5000+ Startups Growing with Base.
            </h2>
            <p className="lk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis
              rhoncus.
            </p>
          </div>
          <div className="animate_right bf">
            <a href="#" className="vc ek kk hh rg ol il cm gi hi">
              Get Started Now
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="bb ze ki xn 2xl:ud-px-0">
          <div className="ji gp">
            <div className="tc uf ap gg fp">
              <div className="animate_top zd/2 to/4">
                <a
                  href="https://flowbite.com"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Diamdus
                  </span>
                </a>

                <p className="lc fb">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <ul className="tc wf cg">
                  <li>
                    <a href="#">
                      <svg
                        className="vh ul cl il"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_48_1499)">
                          <path
                            d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                            fill=""
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1499">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="vh ul cl il"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_48_1502)">
                          <path
                            d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                            fill=""
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1502">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="vh ul cl il"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_48_1505)">
                          <path
                            d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                            fill=""
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1505">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="vh ul cl il"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_48_1508)">
                          <path d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.70301 5.63814 10.1708 5.82293 10.59 6.0921C10.984 6.3391 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.77 8.1211 11.77 8.7141C11.77 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.77 12.8691C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.77 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3825 9.92084 18.6165 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6641 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.28138 16.5819 8.51628 16.4805 8.721 16.3321C8.92139 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7101 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291H7.197V16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9861H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5581C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.2179 16.295 18.9541C15.6887 18.7266 15.148 18.3529 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9745 11.4082 14.3245 10.8378 14.77 10.3461C15.213 9.9011 15.754 9.5061 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.148 10.6931C22.5499 11.2636 22.8494 11.8998 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0391 17.18 11.1871C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8691 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841V11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1508">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="vd ro tc sf rn un gg vn">
                <div className="animate_top">
                  <h4 className="kk wm tj ec">Quick Links</h4>

                  <ul>
                    <li>
                      <a href="#" className="sc xl vb">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Careers
                        <span className="sc ek uj lk nh rg zi _i nc">
                          Hiring
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="animate_top">
                  <h4 className="kk wm tj ec">Services</h4>

                  <ul>
                    <li>
                      <a href="#" className="sc xl vb">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Graphics Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Ui/Ux Design
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="animate_top">
                  <h4 className="kk wm tj ec">Support</h4>

                  <ul>
                    <li>
                      <a href="#" className="sc xl vb">
                        Company
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Press media
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Our Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc xl vb">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="animate_top">
                  <h4 className="kk wm tj ec">Newsletter</h4>
                  <p className="ac qe">Subscribe to receive future updates</p>

                  <form
                    action="https://formbold.com/s/unique_form_id"
                    method="POST"
                  >
                    <div className="i">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="vd sm _g ch pm vk xm rg gm dm dn gi mi"
                      />

                      <button className="h q fi">
                        <svg
                          className="th vm ul"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bh ch pm tc uf sf yo wf xf ap cg fp bj">
            <div className="animate_top">
              <ul className="tc wf gg">
                <li>
                  <a href="#" className="xl">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="xl">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="xl">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate_top">
              <p>&copy; 2025 Diamdus. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
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
