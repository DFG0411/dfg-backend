import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoOpenFjsum } from 'src/app/entities/PoOpenFjsum.entity';
import { PoOpenFjsumService } from './PoOpenFjsum.service';

@Controller('PoOpenFjsum')
export class PoOpenFjsumController extends BaseController<PoOpenFjsum> {
    constructor(protected service:PoOpenFjsumService)
    {
        super();
    }
}
