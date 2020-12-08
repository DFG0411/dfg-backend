import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoTqlvZ } from 'src/app/entities/dfg_report_po_tqlvz.entity';
import { DfgReportPoTqlvzService } from './dfg-report-po-tqlvz.service';

@Controller('dfg-report-po-tqlvz')
export class DfgReportPoTqlvzController extends BaseController<DfgReportPoTqlvZ> {
    constructor(protected service:DfgReportPoTqlvzService)
    {
        super();
    }
}
