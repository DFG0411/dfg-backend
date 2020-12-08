import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportBySoKuCun } from 'src/app/entities/dfg_report_bysokucun.entity';
import { DfgReportBysokucunService } from './dfg-report-bysokucun.service';

@Controller('dfg-report-bysokucun')
export class DfgReportBysokucunController extends BaseController<DfgReportBySoKuCun> {
    constructor(protected service:DfgReportBysokucunService)
    {
        super();
    }
}
