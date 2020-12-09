import { Module } from '@nestjs/common';
import { OrdersController } from './Orders.controller';
import { OrdersService } from './Orders.service';
import { OrdersProviders } from './Orders.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [OrdersController],
  providers: [...OrdersProviders,OrdersService]
})
export class OrdersModule {}
