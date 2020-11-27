import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {verify} from 'jsonwebtoken';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  const { JWT_SECRET } =process.env;
  // if route is protected, there is a user set in auth.middleware
  if (!!req.user) {
    return !!data ? req.user[data] : req.user['id'];
  }

  // in case a route is not protected, we still want to get the optional auth user from jwt
  const token = req.headers.authorization ? (req.headers.authorization as string).split(' ') : null;
  if (token && token[1]) {
    const decoded: any = verify(token[1], JWT_SECRET);
    return decoded.sub
    // this.userService.findOneById(decoded.sub).then(user=>{
      // return !!data ? user[data] : decoded.id;
    // });
    
  }
});
