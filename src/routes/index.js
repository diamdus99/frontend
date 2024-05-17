import { lazy } from 'react';

// use lazy for better code splitting
const Cart = lazy(() => import('@/pages/Cart'));
const Bespoke = lazy(() => import('@/pages/Bespoke1'));
const Preview = lazy(() => import('@/pages/Preview'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const OnlineStore = lazy(() => import('@/pages/OnlineStore'));
const Attributes = lazy(() => import('@/pages/Attributes'));
const ChildAttributes = lazy(() => import('@/pages/ChildAttributes'));
const Products = lazy(() => import('@/pages/Products'));
const ProductDetails = lazy(() => import('@/pages/ProductDetails'));
const Category = lazy(() => import('@/pages/Category'));
const ChildCategory = lazy(() => import('@/pages/ChildCategory'));
const Staff = lazy(() => import('@/pages/Staff'));
const Customers = lazy(() => import('@/pages/Customers'));
const CustomerOrder = lazy(() => import('@/pages/CustomerOrder'));
const Orders = lazy(() => import('@/pages/Orders'));
const OrderInvoice = lazy(() => import('@/pages/OrderInvoice'));
const Coupons = lazy(() => import('@/pages/Coupons'));
// const Setting = lazy(() => import("@/pages/Setting"));
const Page404 = lazy(() => import('@/pages/404'));
const ComingSoon = lazy(() => import('@/pages/ComingSoon'));
const EditProfile = lazy(() => import('@/pages/EditProfile'));
const Languages = lazy(() => import('@/pages/Languages'));
const Currencies = lazy(() => import('@/pages/Currencies'));
const Setting = lazy(() => import('@/pages/Setting'));
const StoreHome = lazy(() => import('@/pages/StoreHome'));
const StoreSetting = lazy(() => import('@/pages/StoreSetting'));
const Calculator = lazy(() => import('@/pages/Calculator'));
const Search = lazy(() => import('@/pages/Search'));
const UploadSheet = lazy(() => import('@/pages/UploadSheet'));
const SubmitTicket = lazy(() => import('@/pages/SubmitTicket'));
const SearchProducts = lazy(() => import('@/pages/SearchProducts'));
const ProductDisplays = lazy(() => import('@/pages/ProductDisplays'));
const Wishlist = lazy(() => import('@/pages/Wishlist'));
/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/attributes',
    component: Attributes,
  },
  {
    path: '/attributes/:id',
    component: ChildAttributes,
  },
  {
    path: '/product/:id',
    component: ProductDetails,
  },
  {
    path: '/categories',
    component: Category,
  },
  {
    path: '/languages',
    component: Languages,
  },
  {
    path: '/currencies',
    component: Currencies,
  },
  {
    path: '/uploadsheet',
    component: UploadSheet,
  },
  {
    path: '/submitticket',
    component: SubmitTicket,
  },

  {
    path: '/categories/:id',
    component: ChildCategory,
  },
  {
    path: '/customers',
    component: Customers,
  },
  {
    path: '/customer-order/:id',
    component: CustomerOrder,
  },
  {
    path: '/our-staff',
    component: Staff,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/order/:id',
    component: OrderInvoice,
  },
  {
    path: '/coupons',
    component: Coupons,
  },
  { path: '/settings', component: Setting },
  {
    path: '/store/customization',
    component: StoreHome,
  },
  {
    path: '/store/store-settings',
    component: StoreSetting,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/coming-soon',
    component: ComingSoon,
  },
  {
    path: '/edit-profile',
    component: EditProfile,
  },
  {
    path: '/onlinestore',
    component: OnlineStore,
  },
  {
    path: '/preview/:id',
    component: Preview,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/bespoke',
    component: Bespoke,
  },
  {
    path: '/calculator',
    component: Calculator,
  },

  {
    path: '/search',
    component: Search,
  },
  {
    path: '/search-products',
    component: SearchProducts,
  },
  {
    path: '/product-display/:id',
    component: ProductDisplays,
  },
  {
    path: '/wishlist',
    component: Wishlist,
  },
];

export default routes;
