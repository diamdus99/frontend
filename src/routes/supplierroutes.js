import { lazy } from 'react';

// use lazy for better code splitting

const Dashboard = lazy(() => import('@/pages/Dashboard'));

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

const supplierroutes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
];

export default supplierroutes;
