import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoWorkloadV } from 'src/app/entities/dfg_report_po_workload_v.entity';
import { DfgReportPoWorkloadVService } from './dfg-report-po-workload-v.service';

@Controller('dfg-report-po-workload-v')
export class DfgReportPoWorkloadVController extends BaseController<DfgReportPoWorkloadV> {
    constructor(protected service:DfgReportPoWorkloadVService)
    {
        super();
    }
}
