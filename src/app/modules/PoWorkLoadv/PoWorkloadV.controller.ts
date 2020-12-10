import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoWorkloadV } from 'src/app/entities/PoWorkloadV.entity';
import { PoWorkloadVService } from './PoWorkloadV.service';

@Controller('PoWorkloadV')
export class PoWorkloadVController extends BaseController<PoWorkloadV> {
    constructor(protected service:PoWorkloadVService)
    {
        super();
    }
}
