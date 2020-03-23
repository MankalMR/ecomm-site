import React from "react";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from "../form-input/form-input";
import Button from '../button/button';
import "./login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: "", password: "" });
    } catch (err) {
        console.error(err);
    }

  };

  render() {
    return (
      <section className="login">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
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
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={ signInWithGoogle } classes="google-btn">Sign In with Google</Button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
