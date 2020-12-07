import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPo_24m } from 'src/app/entities/dfg_report_po_24m.entity';
import { DfgReportPo24mService } from './dfg-report-po-24m.service';

@Controller('dfg-report-po-24m')
export class DfgReportPo24mController extends BaseController<DfgReportPo_24m> {
    constructor(
        protected service:DfgReportPo24mService
    ){
        super();
    }
}
