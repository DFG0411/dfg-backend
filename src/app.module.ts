import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { DatabaseModule } from './database/database.module';
import { HistoryModule } from './history/history.module';
import { BomPlanModule } from './bom/plan.module';
import { HourRateModule } from './hourrate/hourrate.module';
import { StockTakingModule } from './stocktaking/stocktaking.module';
import { MoModule } from './mo/mo.module';
import {GraphQLModule} from '@nestjs/graphql'
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { SessionModule } from './session/session.module';
@Module({
  imports: [
    DatabaseModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
    HistoryModule,
    StockTakingModule,
    MoModule,
    UserModule,
    UserRoleModule,
    SessionModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // context: ({ req }) => ({ req }),
      debug: true,
      playground: process.env.GRAPHQL_PLAYGROUND === 'true',
      // formatError: graphqlError,
      installSubscriptionHandlers: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
