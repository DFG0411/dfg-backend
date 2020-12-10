import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoTqlvZ } from 'src/app/entities/PoTqlvZ.entity';
import { PoTqlvZService } from './PoTqlvZ.service';

@Controller('PoTqlvZ')
export class PoTqlvZController extends BaseController<PoTqlvZ> {
    constructor(protected service:PoTqlvZService)
    {
        super();
    }
}
