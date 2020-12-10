import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{SalesZm}from 'src/app/entities/SalesZm.entity';
import{SalesZmService}from'./SalesZm.service'



@ApiTags('SaleZm')
@Controller('SaleZm')



export class SalesZmController extends  BaseController<SalesZm>{
    constructor (protected service:SalesZmService) {
        super();
     }  

}
