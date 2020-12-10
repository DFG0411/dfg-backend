import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { RptPo } from 'src/app/entities/RptPo.entity';
import { RptPoService } from './RptPo.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('RptPo')
@Controller('RptPo')
export class RptPoController extends BaseController<RptPo> {
    constructor(protected service:RptPoService)
    {
        super();
    }
}
