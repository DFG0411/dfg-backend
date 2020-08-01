import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserModule } from '../user/user.module';
// import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
// import { SERVER_CONFIG } from '../server.constants';
@Module({
  imports: [
    /*PassportModule.register({defaultStrategy: 'jwt'}),*/
    JwtModule.register({
      // secret: SERVER_CONFIG.jwtSecret,
      secret:'G1971g',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {
}
