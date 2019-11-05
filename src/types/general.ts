export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface IUserState extends IUser {
  loggedIn: boolean;
  hasLoadedUser: boolean;
}
