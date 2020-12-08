import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoBv } from 'src/app/entities/dfg_report_po_bv.entity';
import { DfgReportPoBvService } from './dfg-report-po-bv.service';

@Controller('dfg-report-po-bv')
export class DfgReportPoBvController extends BaseController<DfgReportPoBv> {
    constructor(protected service:DfgReportPoBvService)
    {
        super();
    }
}
