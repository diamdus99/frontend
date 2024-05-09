import React, { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AccessibleNavigationAnnouncer from '@/components/AccessibleNavigationAnnouncer';
import PrivateRoute from '@/components/login/PrivateRoute';
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const Layout = lazy(() => import('@/layout/Layout'));
const Login = lazy(() => import('@/pages/Login'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const ForgetPassword = lazy(() => import('@/pages/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));

const App = () => {
  const login = 'customer';
  return (
    <>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgetPassword} />
          <Route path="/reset-password/:token" component={ResetPassword} />

          <PrivateRoute>
            {login === 'customer' ? (
              <Route path="/" component={Layout} />
            ) : (
              <div>hello</div>
            )}
          </PrivateRoute>
          <Redirect exact from="/" to="/landing-page" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
