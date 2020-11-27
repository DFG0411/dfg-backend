import chalk from 'chalk';
// import dateFormat from 'dateformat';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../../user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
    private jwtService:JwtService,
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
    // console.log('roles:'+!roles,roles==null,roles==[null],roles==[],JSON.stringify(roles),roles.length==0)
    if( roles.length==0) return true;
    const now = new Date();
    console.log(
      chalk.bgRedBright.whiteBright.bold('\n\n START QUERY '),
      chalk.bgWhiteBright.redBright.bold(' ', now.toString(), ' \n'),
      chalk.yellow('\nRoles Allowed: '),
      chalk.red(...roles),
      '\n',
    );

    // const ctx = GqlExecutionContext.create(context);
    const  req  = context.switchToHttp().getRequest();
   
    if (req?.headers?.authorization) {
      const token: string = req.headers.authorization.split(' ')[1];
      const payload = this.jwtService.verify(token) ;
      // console.log('user:' + JSON.stringify(req.user));
       if (typeof payload !== 'string' && payload) {
        const { sub,user } = payload;
        const userRoles = user?.roles;
        // let userRoleNames=userRoles;
        // if(!user) {
        //   const dbUser = await this.userService.findOneById(sub)
        //   userRoles = dbUser.roles;
        //   userRoleNames = userRoles?userRoles.map((r) => r.name):['guest'];
        // };
        
        console.log('payload:' + JSON.stringify(payload));
        console.log(
          chalk.yellow('\nUser role: '),
          chalk.red(...userRoles),
          '\n',
        );
        const hasRole = () =>
          roles.filter((role) => userRoles.includes(role)).length > 0;
          // console.log('has role:'+ hasRole(),sub && user&& userRoleNames && hasRole());
        // const hasRole = () => roles.some((role) => role === userRoleName);
        return sub && user&& userRoles && hasRole();
      } else {
        return false;
      }
    }
  }
  handleRequest(err:Error, user:any, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
  // getRequest(context: ExecutionContext) {
  //   const ctx = GqlExecutionContext.create(context);
  //   return ctx.getContext().req;
  // }
}
