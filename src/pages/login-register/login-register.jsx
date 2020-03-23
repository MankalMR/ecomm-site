import React from 'react';
import PropTypes from 'prop-types';

import Login from '../../components/login/login';
import Register from '../../components/register/register';
import './login-register.scss';

const LoginRegister = () => (
    <div className="login-register">
        <Login />
        <Register />
    </div>
);

LoginRegister.propTypes = {
    history: PropTypes.object
}

export default LoginRegister;