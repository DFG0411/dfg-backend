import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportOrders } from 'src/app/entities/dfg_report_orders.entity';
import { DfgReportOrdersService } from './dfg-report-orders.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dfg-report-orders')
@Controller('dfg-report-orders')
export class DfgReportOrdersController extends BaseController<DfgReportOrders>{
    constructor(protected service:DfgReportOrdersService ) {
        super();
    }
 
}