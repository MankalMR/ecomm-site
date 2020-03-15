import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import { auth } from './firebase/firebase.utils';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import LoginRegister from './pages/login-register/login-register';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  authStateUnsubscribe = null;

  componentDidMount() {
    this.authStateUnsubscribe = auth.onAuthStateChanged(user => this.setState({ currentUser: user }));
  }

  componentWillUnmount() {
    this.authStateUnsubscribe();
  }

  logOffUser = () => {
    auth.signOut();
  }

  render() {
    return (
      <div className="App">
        <Header logOffCallback={ this.state.currentUser ? this.logOffUser : null}/>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/shop" component={Shop}/>
          <Route path="/login" component={LoginRegister}/>
        </Switch>
      </div>
    );
  }
}

export default App;
