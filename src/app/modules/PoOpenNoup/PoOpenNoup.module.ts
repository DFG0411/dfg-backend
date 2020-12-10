import { Module } from '@nestjs/common';
import { PoOpenNoupController } from './PoOpenNoup.controller';
import { PoOpenNoupService } from './PoOpenNoup.service';
import { DatabaseModule } from 'src/database/database.module';
import { PoOpenNoupProviders } from './PoOpenNoup.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [PoOpenNoupController],
  providers: [...PoOpenNoupProviders,PoOpenNoupService]
})
export class PoOpenNoupModule {}
