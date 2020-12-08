import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoWorkload } from 'src/app/entities/dfg_report_po_workload.entity';
import { DfgReportPoWorkloadService } from './dfg-report-po-workload.service';

@Controller('dfg-report-po-workload')
export class DfgReportPoWorkloadController extends BaseController<DfgReportPoWorkload>{
    constructor(protected service:DfgReportPoWorkloadService)
    {
        super();
    }
}
