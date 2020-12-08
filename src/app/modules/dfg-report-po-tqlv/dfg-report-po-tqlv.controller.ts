import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoTqlv } from 'src/app/entities/dfg_report_po_tqlv.entity';
import { DfgReportPoTqlvService } from './dfg-report-po-tqlv.service';

@Controller('dfg-report-po-tqlv')
export class DfgReportPoTqlvController extends BaseController<DfgReportPoTqlv>{
    constructor(protected service:DfgReportPoTqlvService)
    {
        super();
    }
}
