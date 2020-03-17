import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Login from '../../components/login/login';
import Register from '../../components/register/register';
import './login-register.scss';

const LoginRegister = ({ history }) => (
    <div className="login-register">
        <Login successCallback={ () => history.push('/') } />
        <Register successCallback={ () => history.push('/') } />
    </div>
);

LoginRegister.propTypes = {
    history: PropTypes.object
}

export default withRouter(LoginRegister);