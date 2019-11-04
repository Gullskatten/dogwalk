import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <h1>Hello world!</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
