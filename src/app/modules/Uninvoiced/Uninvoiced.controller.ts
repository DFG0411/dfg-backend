import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { Uninvoiced } from 'src/app/entities/Uninvoiced.entity';
import { BaseController } from 'src/base';
import{UninvoicedService}from './Uninvoiced.service'

@ApiTags('uninvoiced')
@Controller('uninvoiced')
export class UninvoicedController extends BaseController<Uninvoiced> {

    constructor(protected service:UninvoicedService){

        super();
    }




}