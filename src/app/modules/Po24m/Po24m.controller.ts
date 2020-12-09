import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { Po24m } from 'src/app/entities/Po24m.entity';
import { Po24mService } from './Po24m.service';

@Controller('Po24m')
export class Po24mController extends BaseController<Po24m> {
    constructor(
        protected service:Po24mService
    ){
        super();
    }
}
