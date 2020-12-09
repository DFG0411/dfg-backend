import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { RptBysoKucun } from 'src/app/entities/RptBysoKucun.entity';
import { RptBysoKucunService } from './RptBysoKucun.service';

@Controller('RptBysoKucun')
export class RptBysoKucunController extends BaseController<RptBysoKucun> {
    constructor(protected service:RptBysoKucunService)
    {
        super();
    }
}
