import * as React from 'react';
import { UserContext } from './User';
import firebaseApp, { FieldValue } from '../utils/firebase';
import { IUserProfile } from '../types/general';

const defaultProfileData: IUserProfile = {
  uid: 'string',
  email: 'string',
  displayName: 'string',
  photoURL: 'string',
  lastActive: 'string',
  settings: {
    theme: 'default'
  }
};

const ProfileContext = React.createContext({
  data: defaultProfileData,
  setData: (nextState: IUserProfile) => {}
});

const ProfileProvider: React.FunctionComponent = ({ children }) => {
  const [data, setData] = React.useState(defaultProfileData);
  const { data: userData } = React.useContext(UserContext);
  delete userData.hasLoadedUser;

  const userRef = firebaseApp
    .firestore()
    .collection('users')
    .doc(userData.uid);

  const loadUserInformation = React.useCallback(async () => {
    const userRefDataReq = await userRef.get();
    if (!userRefDataReq.exists) {
      delete userData.loggedIn;

      userRef.set({
        ...userData,
        lastActive: FieldValue.serverTimestamp(),
        settings: {
          theme: 'default'
        }
      });
      
    } else {
      const userInfo = userRefDataReq.data();

      if (userInfo) {
        setData({
          ...data,
          ...userInfo
        });
      }
    }
  }, [data, userRef, userData]);

  React.useEffect(() => {
    if (userData.loggedIn) {
      loadUserInformation();

      userRef.onSnapshot(doc => {
        const nextData = doc.data() as IUserProfile;

        if (!!nextData) {
          setData(nextData);
        }
      });
    }
    //eslint-disable-next-line
  }, [userRef]);

  //eslint-disable-next-line
  function updateField<T>(field: string, value: T) {
    userRef.update(field, value);
  }

  return (
    <ProfileContext.Provider
      value={{
        data,
        setData: (nextData: IUserProfile) => setData(nextData)
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
export { ProfileContext };
