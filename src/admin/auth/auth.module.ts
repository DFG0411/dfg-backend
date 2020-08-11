import { Module, MiddlewareConsumer } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthResolvers } from './auth.resolvers';
// import { JWTMiddleware } from './middlewares/jwt.middleware';
// import { SERVER_CONFIG } from '../server.constants';
@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret:process.env.JWT_SECRET||'G1971g',
      signOptions: {
        expiresIn: '7d',
      },
    }),
    UserModule,
  ],
  providers: [AuthService, AuthResolvers, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {
  // public configure(consumer: MiddlewareConsumer):void {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes();
  // }
}
