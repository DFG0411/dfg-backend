import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoPay_24m } from 'src/app/entities/dfg_report_po_pay_24m.entity';
import { DfgReportPoPayModule } from '../PoPay/dfg-report-po-pay.module';
import { DfgReportPoPay24mService } from './dfg-report-po-pay-24m.service';

@Controller('dfg-report-po-pay-24m')
export class DfgReportPoPay24mController extends BaseController<DfgReportPoPay_24m> {
    constructor(protected service:DfgReportPoPay24mService)
    {
        super();
    }
}
