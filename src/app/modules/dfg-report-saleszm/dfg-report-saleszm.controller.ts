import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{DfgReportSalesZm}from 'src/app/entities/dfg_report_saleszm.entity';
import{DfgReportSaleszmService}from'./dfg-report-saleszm.service'



@ApiTags('dfg-report-saleszm')
@Controller('dfg-report-saleszm')



export class DfgReportSaleszmController extends  BaseController<DfgReportSalesZm>{
    constructor (protected service:DfgReportSaleszmService) {
        super();
     }  

}
