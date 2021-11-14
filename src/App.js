import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Community from './routes/Community';
import Join from './routes/Join';
import Login from './routes/Login';
import News from './routes/News';
import Product from './routes/Product';
const App = () => {
  return (
    <HashRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/news" component={News} />
      <Route path="/product" component={Product} />
    </HashRouter>
  );
};

export default App;