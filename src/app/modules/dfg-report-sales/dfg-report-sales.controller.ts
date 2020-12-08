import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{DfgReportSales}from 'src/app/entities/dfg_report_sales.entity'
import{DfgReportSalesService}from './dfg-report-sales.service'


@ApiTags('dfg-report-sales')
@Controller('dfg-report-sales')
export class DfgReportSalesController extends BaseController<DfgReportSales>{
    constructor (protected service:DfgReportSalesService) {
        super();
     }  

}
