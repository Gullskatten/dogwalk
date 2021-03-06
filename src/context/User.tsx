import * as React from 'react';
import { IUserState } from '../types/general';
import firebaseApp from '../utils/firebase';
import { userStorage } from '../utils/storage';

export const defaultUser: IUserState = {
  uid: '',
  photoURL: '',
  loggedIn: false,
  displayName: '',
  email: '',
  hasLoadedUser: false
};

const UserContext = React.createContext({
  data: defaultUser,
  setData: (nextData: IUserState) => {}
});

const UserProvider: React.FunctionComponent = ({ children }) => {
  const defaultUserState: IUserState = userStorage.get()
    ? userStorage.get()
    : defaultUser;
  const [state, setState] = React.useState(defaultUserState);
  const [hasLoadedUser, setHasLoadedUser] = React.useState(false);

  React.useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(async user => {
      if (user) {
        try {
          await user.getIdToken(true);

          const newState = {
            loggedIn: true,
            email: user.email && user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid
          } as IUserState;

          setState(newState);
          userStorage.set(newState);
        } catch (error) {
          firebaseApp.auth().signOut();
          userStorage.clearItem();
        }
      }
      setHasLoadedUser(true);
    });
  }, []);

  const value = {
    data: { ...state, hasLoadedUser },
    setData: (nextData: IUserState) => {
      setState(nextData);
    }
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
