import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoPay24m } from 'src/app/entities/PoPay24m.entity';
import { PoPayModule } from '../PoPay/PoPay.module';
import { PoPay24mService } from './PoPay24m.service';

@Controller('PoPay24m')
export class PoPay24mController extends BaseController<PoPay24m> {
    constructor(protected service:PoPay24mService)
    {
        super();
    }
}
