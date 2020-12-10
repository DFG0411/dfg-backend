import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoPay } from 'src/app/entities/PoPay.entity';
import { PoPayService } from './PoPay.service';

@Controller('PoPay')
export class PoPayController extends BaseController<PoPay> {
    constructor(protected service:PoPayService)
    {
        super();
    }
}
