import React from  'react';
import PropTypes from 'prop-types';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './register.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }

        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );

          await createUserProfileDocument(user, { displayName });

          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });

          // calling success callback
          this.props.successCallback();
        } catch (error) {
          console.error(error);
        }
    };

    render() {
        return (
            <section className="register">
                <h2>I do not have an account</h2>
                <span>Register with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        label="Display Name"
                        handleChange={this.handleChange}
                        value={this.state.displayName}
                    />
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword}
                    />
                    <Button type="submit">Register</Button>
                </form>
            </section>
        )
    }
}

Register.propTypes = {
    successCallback: PropTypes.func
}

export default Register;