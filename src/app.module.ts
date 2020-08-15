import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './app/inventory/inventory.module';
import { DatabaseModule } from './database/database.module';
import { HistoryModule } from './app/history/history.module';
import { BomPlanModule } from './app/bom/plan.module';
import { HourRateModule } from './app/hourrate/hourrate.module';
import { StockTakingModule } from './app/stocktaking/stocktaking.module';
import { MoModule } from './app/mo/mo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './admin/user/user.module';
import { UserRoleModule } from './admin/user-role/user-role.module';
import { SessionModule } from './admin/session/session.module';
import { AuthModule } from './admin/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './admin/auth/passport/jwt.strategy';
@Module({
  imports: [
    DatabaseModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
    HistoryModule,
    StockTakingModule,
    MoModule,
    // UserModule,
    // UserRoleModule,
    // SessionModule,
    AuthModule,
    ConfigModule.forRoot({isGlobal:true}),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      debug: false,
      playground: process.env.GRAPHQL_PLAYGROUND=='true',
      // formatError: graphqlError,
      installSubscriptionHandlers: true,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService,],
  exports:[]
})
export class AppModule {}
