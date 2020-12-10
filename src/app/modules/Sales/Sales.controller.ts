import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{Sales}from 'src/app/entities/Sales.entity'
import{SalesService}from './Sales.service'


@ApiTags('Sales')
@Controller('Sales')
export class SalesController extends BaseController<Sales>{
    constructor (protected service:SalesService) {
        super();
     }  

}
