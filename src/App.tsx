import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { UserContext } from './context/User';
import Login from './views/Login';
import Root from './views/Root';

const App: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);

  return (
    <BrowserRouter>
      {userContext.data.loggedIn ? (
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
