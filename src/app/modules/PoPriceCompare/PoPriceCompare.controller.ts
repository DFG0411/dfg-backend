import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoPriceCompare } from 'src/app/entities/PoPriceCompare.entity';
import { PoPriceCompareService } from './PoPriceCompare.service';

@Controller('PoPriceCompare')
export class PoPriceCompareController extends BaseController<PoPriceCompare>{
    constructor(protected service:PoPriceCompareService)
    {
        super();
    }
}
