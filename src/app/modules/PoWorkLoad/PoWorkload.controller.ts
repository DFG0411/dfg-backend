import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoWorkload } from 'src/app/entities/PoWorkload.entity';
import { PoWorkloadService } from './PoWorkload.service';

@Controller('PoWorkload')
export class PoWorkloadController extends BaseController<PoWorkload>{
    constructor(protected service:PoWorkloadService)
    {
        super();
    }
}
