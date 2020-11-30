import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../auth.service';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import {User} from '../../../entities/user.entity';
// import { ModuleRef, ContextIdFactory } from '@nestjs/core';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService,
    // private modulref:ModuleRef
    ) {
    super({
      secretOrKey:process.env.JWT_SECRET||'G1971g',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: SERVER_CONFIG.jwtSecret,
      passReqToCallback: true,
    });
  }

  public async validate(payload: IJwtPayload):Promise<Partial<User>> {
    // const contextId = ContextIdFactory.getByRequest(request);
    // const authService = await this.authService.resolve(AuthService, contextId);
    const user: User = await this.authService.validateUser(payload);
    console.log('strategy User:'+JSON.stringify (user));
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
