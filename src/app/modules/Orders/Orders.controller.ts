import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { OrdersService } from './Orders.service';
import { ApiTags } from '@nestjs/swagger';
import { Orders } from 'src/app/entities/Orders.entity';

@ApiTags('orders')
@Controller('orders')
export class OrdersController extends BaseController<Orders>{
    constructor(protected service:OrdersService ) {
        super();
    }
 
}