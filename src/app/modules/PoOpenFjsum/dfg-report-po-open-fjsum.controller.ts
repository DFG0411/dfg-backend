import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoOpenFjsum } from 'src/app/entities/dfg_report_po_open_fjsum.entity';
import { DfgReportPoOpenFjsumService } from './dfg-report-po-open-fjsum.service';

@Controller('dfg-report-po-open-fjsum')
export class DfgReportPoOpenFjsumController extends BaseController<DfgReportPoOpenFjsum> {
    constructor(protected service:DfgReportPoOpenFjsumService)
    {
        super();
    }
}
