import React from 'react';

import Login from '../../components/login/login';
import Register from '../../components/register/register';
import './login-register.scss';

const LoginRegister = () => (
    <div className="login-register">
        <Login />
        <Register />
    </div>
);

export default LoginRegister;