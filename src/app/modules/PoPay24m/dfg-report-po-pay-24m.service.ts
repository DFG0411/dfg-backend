import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoPay_24m } from 'src/app/entities/dfg_report_po_pay_24m.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoPay24mService extends BaseService<DfgReportPoPay_24m> {
    constructor(@Inject('DfgReportPoPay_24mRepositoryToken') protected readonly repo:Repository<DfgReportPoPay_24m>
    )
    {
        super();
    }
}
