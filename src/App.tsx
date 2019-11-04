import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { UserContext } from './context/User';
import useAuth from './hooks/useAuth';
import Text from './components/Text';

const App: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);
  const { login, logout } = useAuth();

  return (
    <BrowserRouter>
      {userContext.data.loggedIn ? (
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Text element="link" to="/something">
                  welcome, {userContext.data.displayName}
                </Text>
                <button onClick={logout}>Logout</button>
              </>
            )}
          />
        </Switch>
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            render={() => <button onClick={login}>Login</button>}
          />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
