export interface IUser {
  user: string;
  password: string;
  name: string;
  role: string;
}

export interface IUserStore  extends IUser {
  token: string;
}