import * as React from 'react';
import { IUserState } from '../types/general';

const defaultUser: IUserState = {
  id: '',
  photoURL: '',
  loggedIn: false,
  displayName: ''
};

const UserContext = React.createContext({
  data: defaultUser,
  setData: (nextData: IUserState) => {}
});

const UserProvider: React.FunctionComponent = ({ children }) => {
  const [state, setState] = React.useState(defaultUser);

  const value = {
    data: state,
    setData: (nextData: IUserState) => {
      setState(nextData);
    }
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
