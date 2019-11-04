import * as React from 'react';
import firebase, { providers } from '../utils/firebase';
import { UserContext, defaultUser } from '../context/User';
import { userStorage } from '../utils/storage';

export default function useAuth() {
  const userContext = React.useContext(UserContext);

  async function login() {
    try {
      await firebase.auth().signInWithRedirect(providers.google);
    } catch (error) {
      console.log('Errror logging in!: ', error);
    }
  }

  async function logout() {
    await firebase.auth().signOut();
    userContext.setData(defaultUser);
    userStorage.clearItem();
    window.location.href = '/';
  }

  return {
    login,
    logout
  };
}
