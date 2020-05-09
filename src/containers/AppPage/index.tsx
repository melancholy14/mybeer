import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';

import IndexPage from 'containers/IndexPage';
import SearchPage from 'containers/SearchPage';

import { Header, Footer } from 'components';

type LayoutRouterType = {
  component: React.ComponentType<RouteComponentProps>;
  path: string;
  exact?: boolean;
};

function App() {
  const HeaderLayoutRouter = ({
    component: Component,
    ...props
  }: LayoutRouterType) => (
    <Route
      {...props}
      render={(matchProps) => (
        <>
          <Header />
          <div className="background">
            <div className="container">
              <Component {...matchProps} />
            </div>
          </div>
        </>
      )}
    />
  );

  const FooterLayoutRouter = ({
    component: Component,
    ...props
  }: LayoutRouterType) => (
    <Route
      {...props}
      render={(matchProps) => (
        <>
          <Component {...matchProps} />
          <Footer />
        </>
      )}
    />
  );

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <HeaderLayoutRouter path="/search" exact component={SearchPage} />
        <FooterLayoutRouter path="/" component={IndexPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
