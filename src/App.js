import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
