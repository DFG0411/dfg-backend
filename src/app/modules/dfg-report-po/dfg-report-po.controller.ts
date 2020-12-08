import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPo } from 'src/app/entities/dfg_report_po.entity';
import { DfgReportPoService } from './dfg-report-po.service';

@Controller('dfg-report-po')
export class DfgReportPoController extends BaseController<DfgReportPo> {
    constructor(protected service:DfgReportPoService)
    {
        super();
    }
}
