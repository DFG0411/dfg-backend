export interface IUser {
  id: number;
  roles: string[];
  email: string;
  salt: string;
  hashedPassword: string;
  name: string;
  birthed: string;
  title: string;
  gender: string;
}
