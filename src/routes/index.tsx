import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

import Dashboard from '../pages/Dashboard';
import CreateAppointments from '../pages/CreateAppointments';

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
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
