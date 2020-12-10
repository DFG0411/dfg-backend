import { Module } from '@nestjs/common';
import { PoPayController } from './PoPay.controller';
import { PoPayService } from './PoPay.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoPayProviders } from './PoPay.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoPayController],
  providers: [...PoPayProviders,PoPayService]
})
export class PoPayModule {}
