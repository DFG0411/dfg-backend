import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{ProductRcHincdAll} from 'src/app/entities/ProductRcHincdAll.entity'
import{ProductRcHincdAllService}from './ProductRcHincdAll.service'
@ApiTags('ProductRcHincdAll')
@Controller('ProductRcHincdAll')
export class ProductRcHincdAllController extends BaseController<ProductRcHincdAll> {
    constructor (protected service:ProductRcHincdAllService) {
        super();
     }  

}
