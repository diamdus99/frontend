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
const suppliersidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },

  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },
  {
    path: '/calculator',
    icon: FiCompass,
    name: 'Calculator',
  },
  {
    path: '/bespoke',
    icon: FiUsers,
    name: 'Bespoke',
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
    path: '/wishlist',
    name: 'Wishlist',
    icon: FiCompass,
  },
];

export default suppliersidebar;
