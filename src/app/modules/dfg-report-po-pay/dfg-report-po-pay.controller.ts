import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoPay } from 'src/app/entities/dfg_report_po_pay.entity';
import { DfgReportPoPayService } from './dfg-report-po-pay.service';

@Controller('dfg-report-po-pay')
export class DfgReportPoPayController extends BaseController<DfgReportPoPay> {
    constructor(protected service:DfgReportPoPayService)
    {
        super();
    }
}
