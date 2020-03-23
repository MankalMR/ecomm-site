import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux-store/user/user.actions';
import './App.scss';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';
import LoginRegister from './pages/login-register/login-register';

class App extends React.Component {
  authStateUnsubscribe = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.authStateUnsubscribe();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/checkout' component={Checkout} />
          <Route
            path='/login'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <LoginRegister />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps, { setCurrentUser })(App);
