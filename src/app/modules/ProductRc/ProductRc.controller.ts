import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { ProductRc } from 'src/app/entities/ProductRc.entity';
import { ProductRcService } from './ProductRc.service';

@Controller('ProductRc')
export class ProductRcController extends BaseController<ProductRc> {
    constructor(protected service:ProductRcService)
    {
        super();
    }
}
