import React from  'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './register.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({'email': '', 'password': ''});
    }

    render() {
        return (
            <section className="register">
                <h2>I don't have an account</h2>
                <span>Register with your email and password</span>
                <form onSubmit={this.handleSubmit}>
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
                    <Button type="submit">Register</Button>
                </form>
            </section>
        )
    }
}

export default Register;