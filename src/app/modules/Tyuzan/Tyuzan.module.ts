import { Module } from '@nestjs/common';
import { TyuzanController } from './Tyuzan.controller';
import { TyuzanService } from './Tyuzan.service';
import { DatabaseModule } from 'src/database/database.module';
import { TyuzanProviders } from './Tyuzan.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [TyuzanController],
  providers: [...TyuzanProviders,TyuzanService]
})
export class TyuzanModule {}
