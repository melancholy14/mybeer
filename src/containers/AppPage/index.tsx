import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';

import IndexPage from 'containers/IndexPage';
import SearchPage from 'containers/SearchPage';

import Footer from 'components/Footer';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="bg-whitesmoke h-95vh">
        <Switch>
          <Route path="/search" exact component={SearchPage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </div>
      <Footer />
    </ConnectedRouter>
  );
}

export default App;
