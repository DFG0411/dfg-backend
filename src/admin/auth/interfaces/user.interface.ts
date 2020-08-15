export interface IPayloadUser {
  id: number;
  roles: string[];
  email: string;
  userName: string;
  gender: string;
  isVerified:boolean,
  avatar:string
}
