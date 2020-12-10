import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { ChukuWk } from 'src/app/entities/ChukuWk.entity';
import { ChukuWkService } from './ChukuWk.service';

@Controller('ChukuWk')
export class ChukuWkController extends BaseController<ChukuWk>
{
    constructor(protected service:ChukuWkService){
        super();
    }
}
