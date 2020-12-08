import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportChuKuWk } from 'src/app/entities/dfg_report_chukuwk.entity';
import { DfgReportChukuwkService } from './dfg-report-chukuwk.service';

@Controller('dfg-report-chukuwk')
export class DfgReportChukuwkController extends BaseController<DfgReportChuKuWk>
{
    constructor(protected service:DfgReportChukuwkService){
        super();
    }
}
