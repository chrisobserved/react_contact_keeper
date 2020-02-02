import React, { Fragment, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { isAuthenticated, loading } = authContext;

  const { setAlert } = alertContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Fragment>
            {setAlert('Account login required', 'danger')}
            <Redirect to="login" />
          </Fragment>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
