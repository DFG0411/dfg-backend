import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';

import{DfgReportSoReceiveService}from './dfg-report-so-receive.service'
import{DfgReportSoReceive} from 'src/app/entities/dfg_report_so_receive.entity'
@ApiTags('dfg-report-so-receive')
@Controller('dfg-report-so-receive')


export class DfgReportSoReceiveController extends BaseController<DfgReportSoReceive>{

    constructor (protected service:DfgReportSoReceiveService) {
        super();
     }  

}


