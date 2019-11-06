export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

interface IProfileSettings {
  theme: "default" | "dark"
}

export interface IUserProfile extends IUser {
  lastActive: string;
  settings: IProfileSettings;
}

export interface IUserState extends IUser {
  loggedIn: boolean;
  hasLoadedUser: boolean;
}
