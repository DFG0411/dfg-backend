import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{ProductRcHincd} from 'src/app/entities/ProductRcHincd.entity'
import{ProductRcHincdService} from './ProductRcHincd.service'
@ApiTags('ProductRcHincd')
@Controller('ProductRcHincd')
export class ProductRcHincdController extends BaseController<ProductRcHincd> {
    constructor (protected service:ProductRcHincdService) {
        super();
     }  

}
