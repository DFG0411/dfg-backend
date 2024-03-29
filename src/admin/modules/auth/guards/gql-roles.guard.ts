import chalk from 'chalk';
// import dateFormat from 'dateformat';
import { decode } from 'jsonwebtoken';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { TDecodedToken } from '../../session/session.types';
import { UserService } from '../../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '../passport/jwt.strategy';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
    // private jwtService:JwtService,
  ) {
    super();
    
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    // const jwtService=new JwtService(JwtStrategy)
    const rolesResolver =
      this.reflector.get<string[]>('roles', context.getClass()) || [];
    const rolesQuery =
      this.reflector.get<string[]>('roles', context.getHandler()) || [];
    const roles = [...rolesResolver, ...rolesQuery];
    const now = new Date();
    console.log(
      chalk.bgRedBright.whiteBright.bold('\n\n START QUERY '),
      chalk.bgWhiteBright.redBright.bold(' ', now.toString(), ' \n'),
      chalk.yellow('\nRoles Allowed: '),
      chalk.red(...roles),
      '\n',
    );

    const  req  = context.switchToHttp().getRequest();
    let payload: TDecodedToken;
    console.log('user:' + JSON.stringify(req.user));
    if (req?.headers?.authorization) {
      const accessToken: string = req.headers.authorization.split(' ')[1];
      payload = decode(accessToken) as TDecodedToken;
      if (typeof payload !== 'string' && payload) {
        const { sub } = payload;
        const user = await this.userService.findOneById(sub);
        const userRoles = user?.roles;
        const userRoleNames = userRoles.map((r) => r.roleName);
        console.log(
          chalk.yellow('\nUser role: '),
          chalk.red(...userRoleNames),
          '\n',
        );
        const hasRole = () =>
          roles.filter((role) => userRoleNames.includes(role)).length > 0;
        // const hasRole = () => roles.some((role) => role === userRoleName);
        return sub && user&& userRoles && hasRole();
      } else {
        return false;
      }
    }
  }
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
