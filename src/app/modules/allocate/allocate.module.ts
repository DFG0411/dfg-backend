import { Module } from '@nestjs/common';
import { AllocateController } from './allocate.controller';

@Module({
  controllers: [AllocateController]
})
export class AllocateModule {}
