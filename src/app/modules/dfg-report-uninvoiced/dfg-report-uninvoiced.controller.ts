import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { DfgReportUninvoiced } from 'src/app/entities/dfg_report_uninvoiced.entity';
import { BaseController } from 'src/base';
import{DfgReportUninvoicedService}from './dfg-report-uninvoiced.service'

@ApiTags('dfg-report-uninvoiced')
@Controller('dfg-report-uninvoiced')
export class DfgReportUninvoicedController extends BaseController<DfgReportUninvoiced> {

    constructor(protected service:DfgReportUninvoicedService){

        super();
    }




}