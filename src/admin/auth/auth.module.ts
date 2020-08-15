import { Module, forwardRef, Global,  } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthResolvers } from './auth.resolvers';
import { RolesGuard } from './guards/roles.guard';
import { UserRoleModule } from '../user-role/user-role.module';
// import { AppModule } from 'src/app.module';
// import { JwtService } from '@nestjs/jwt';
// import { JWTMiddleware } from './middlewares/jwt.middleware';
// import { SERVER_CONFIG } from '../server.constants';
@Global()
@Module({
  imports: [
    UserModule,
    UserRoleModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret:process.env.JWT_SECRET||'G1971g',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  providers: [AuthService, AuthResolvers,JwtStrategy,RolesGuard],
  controllers: [AuthController],
  exports:[PassportModule,JwtModule]
})
export class AuthModule {
  // public configure(consumer: MiddlewareConsumer):void {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes();
  // }
}
