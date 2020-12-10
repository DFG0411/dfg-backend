import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoTqlv } from 'src/app/entities/PoTqlv.entity';
import { PoTqlvService } from './PoTqlv.service';

@Controller('PoTqlv')
export class PoTqlvController extends BaseController<PoTqlv>{
    constructor(protected service:PoTqlvService)
    {
        super();
    }
}
