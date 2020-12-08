import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoOpen } from 'src/app/entities/dfg_report_po_open.entity';
import { DfgReportPoOpenService } from './dfg-report-po-open.service';

@Controller('dfg-report-po-open')
export class DfgReportPoOpenController extends BaseController<DfgReportPoOpen>{
    constructor(protected service:DfgReportPoOpenService)
    {
        super();
    }
}
