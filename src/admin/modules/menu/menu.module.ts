import { MenuController } from './menu.controller';
import { Module } from '@nestjs/common';
import { MenuProviders } from './menu.providers';
import { MenuService } from './menu.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule,UserModule],
  controllers: [MenuController],
  providers: [...MenuProviders,MenuService],
})
export class MenuModule {}
