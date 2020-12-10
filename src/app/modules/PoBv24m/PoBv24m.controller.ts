import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoBv24m } from 'src/app/entities/PoBv24m.entity';
import { PoBv24mService } from './PoBv24m.service';

@Controller('PoBv24m')
export class PoBv24mController extends BaseController<PoBv24m>{
    constructor(protected service:PoBv24mService)
    {
        super();
    }
}
