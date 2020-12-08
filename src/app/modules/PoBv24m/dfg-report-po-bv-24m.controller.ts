import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoBv_24m } from 'src/app/entities/dfg_report_po_bv_24m.entity';
import { DfgReportPoBv24mService } from './dfg-report-po-bv-24m.service';

@Controller('dfg-report-po-bv-24m')
export class DfgReportPoBv24mController extends BaseController<DfgReportPoBv_24m>{
    constructor(protected service:DfgReportPoBv24mService)
    {
        super();
    }
}
