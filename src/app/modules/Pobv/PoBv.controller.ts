import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoBv } from 'src/app/entities/PoBv.entity';
import { PoBvService } from './PoBv.service';

@Controller('PoBv')
export class PoBvController extends BaseController<PoBv> {
    constructor(protected service:PoBvService)
    {
        super();
    }
}
