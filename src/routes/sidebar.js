import {
  FiGrid,
  FiUsers,
  FiUser,
  FiCompass,
  FiSettings,
  FiSlack,
  FiGlobe,
} from 'react-icons/fi';

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },

  {
    icon: FiSlack,
    name: 'Catalog',
    routes: [
      {
        path: '/products',
        name: 'Products',
      },
      {
        path: '/categories',
        name: 'Categories',
      },
      {
        path: '/attributes',
        name: 'Attributes',
      },
      {
        path: '/coupons',
        name: 'Coupons',
      },
    ],
  },

  {
    path: '/customers',
    icon: FiUsers,
    name: 'Customers',
  },
  {
    path: '/bespoke',
    icon: FiUsers,
    name: 'Bespoke',
  },
  {
    path: '/uploadsheet',
    icon: FiUsers,
    name: 'UploadSheet',
  },
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },

  {
    path: '/our-staff',
    icon: FiUser,
    name: 'OurStaff',
  },

  {
    path: '/settings?settingTab=common-settings',
    icon: FiSettings,
    name: 'Settings',
  },
  {
    path: '/calculator',
    icon: FiCompass,
    name: 'Calculator',
  },

  {
    path: '/search',
    icon: FiCompass,
    name: 'Search',
  },
  {
    path: '/submitticket',
    name: 'SubmitTicket',
    icon: FiCompass,
  },

  {
    icon: FiGlobe,
    name: 'International',
    routes: [
      {
        path: '/languages',
        name: 'Languages',
      },
      {
        path: '/currencies',
        name: 'Currencies',
      },
    ],
  },
  // {
  //   path: '/onlinestore',
  //   icon: FiTarget,
  //   name: 'OnlineStore',
  // },
  // {
  //   icon: FiTarget,
  //   name: 'OnlineStore',
  //   routes: [
  //     {
  //       name: 'ViewStore',
  //       path: 'http://localhost:3000',
  //       outside: 'store',
  //     },

  //     {
  //       path: '/store/customization',
  //       name: 'StoreCustomization',
  //     },
  //     {
  //       path: '/store/store-settings',
  //       name: 'Store Settings',
  //     },
  //   ],
  // },
  // {
  //   icon: FiTarget,
  //   name: "OnlineStore",
  //   routes: [
  //     {
  //       name: "ViewStore",
  //       path: "http://localhost:3000",
  //       outside: "store",
  //     },

  //     {
  //       path: "/store/customization",
  //       name: "StoreCustomization",
  //     },
  //     {
  //       path: "/store/store-settings",
  //       name: "Store Settings",
  //     },
  //   ],
  // },

  {
    icon: FiSlack,
    name: 'Pages',
    routes: [
      // submenu

      {
        path: '/404',
        name: '404',
      },
      {
        path: '/coming-soon',
        name: 'Coming Soon',
      },
    ],
  },
];

export default sidebar;
