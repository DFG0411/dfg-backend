import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '../auth.service';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
import {UserEntity} from '../../entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      secretOrKey:process.env.JWT_SECRET||'G1971g',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: SERVER_CONFIG.jwtSecret,
      passReqToCallback: true,
    });
  }

  public async validate(payload: IJwtPayload):Promise<Partial<UserEntity>> {
    // console.log('payload:' + payload.sub);
    // console.log('logininfo:' + JSON.stringify(longinUser));
    const user: UserEntity = await this.authService.validateUser(payload);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
