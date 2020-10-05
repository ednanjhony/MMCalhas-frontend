import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

import Dashboard from '../pages/Dashboard';
import CreateAppointments from '../pages/CreateAppointments';

import Providers from '../pages/Providers';
import CreateProviders from '../pages/CreateProviders';

import CashFlow from '../pages/CashFlow';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/reset_password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route
      path="/create_appointments"
      component={CreateAppointments}
      isPrivate
    />

    <Route path="/providers" component={Providers} isPrivate />
    <Route path="/create_providers" component={CreateProviders} isPrivate />

    <Route path="/cash_flow" component={CashFlow} isPrivate />

    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
