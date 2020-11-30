import { Module } from '@nestjs/common';
import { BomitemController } from './bomitem.controller';

@Module({
  controllers: [BomitemController]
})
export class BomitemModule {}
