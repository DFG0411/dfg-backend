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
@Module({
  imports: [
    DatabaseModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
    HistoryModule,
    StockTakingModule,
    MoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
