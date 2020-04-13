import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';

import IndexPage from 'containers/IndexPage';
import Footer from 'components/Footer';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  );
}

export default App;
