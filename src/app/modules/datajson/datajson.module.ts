import { Module } from '@nestjs/common';
import { DatajsonController } from './datajson.controller';
import { DatajsonService } from './datajson.service';

@Module({

  //  imports: [DatabaseModule,forwardRef(()=> UserRoleModule)],
    controllers: [DatajsonController],
    providers: [DatajsonService],
    exports: [],

})
export class DatajsonModule {}
