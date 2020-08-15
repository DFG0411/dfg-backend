import { IPayloadUser } from "./user.interface";

export interface IJwtPayload {
  sub: number,
  user:IPayloadUser,

}
