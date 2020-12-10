import { Module } from '@nestjs/common';
import { SalesController } from './Sales.controller';
import { SalesService } from './Sales.service';
import { DatabaseModule } from 'src/database/database.module';
import {  SalesProviders } from './Sales.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [SalesController],
  providers: [... SalesProviders,SalesService]
})
export class SalesModule {}
