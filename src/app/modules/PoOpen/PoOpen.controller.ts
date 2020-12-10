import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoOpen } from 'src/app/entities/PoOpen.entity';
import { PoOpenService } from './PoOpen.service';

@Controller('PoOpen')
export class PoOpenController extends BaseController<PoOpen>{
    constructor(protected service:PoOpenService)
    {
        super();
    }
}
