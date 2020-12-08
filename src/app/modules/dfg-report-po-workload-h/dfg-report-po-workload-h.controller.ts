import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoWorkloadH } from 'src/app/entities/dfg_report_po_workload_h.entity';
import { DfgReportPoWorkloadHService } from './dfg-report-po-workload-h.service';

@Controller('dfg-report-po-workload-h')
export class DfgReportPoWorkloadHController extends BaseController<DfgReportPoWorkloadH>{
    constructor(protected service:DfgReportPoWorkloadHService)
    {
        super();
    }
}
