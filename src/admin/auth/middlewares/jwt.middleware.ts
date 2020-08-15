import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {verify} from 'jsonwebtoken';
import { UserService } from '../../user/user.service';
/**
 * By using guards ,then only usage of this middleware is adding a user object to the request context.
 * The nestjs docs said the jwtstrategy will do this with validate method.but when? No effect found.
 * It is not used by now.
 * Is there necessity to do it? 
 */
@Injectable()
export class JWTMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction):Promise <any> {
    const authHeaders = req.headers.authorization;
    const {JWT_SECRET}=process.env;
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      const decoded: any = verify(token, JWT_SECRET);
      const user = await this.userService.findOneById(decoded.sub);

      if (!user) {
        throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
      }

      req['user'] = user;
      next();

    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}
