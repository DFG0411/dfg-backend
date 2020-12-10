import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoWorkloadH } from 'src/app/entities/PoWorkloadH.entity';
import { PoWorkloadHService } from './PoWorkloadH.service';

@Controller('PoWorkloadH')
export class PoWorkloadHController extends BaseController<PoWorkloadH>{
    constructor(protected service:PoWorkloadHService)
    {
        super();
    }
}
