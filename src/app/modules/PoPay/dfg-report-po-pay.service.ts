import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoPay } from 'src/app/entities/dfg_report_po_pay.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoPayService extends BaseService<DfgReportPoPay> {
    constructor(@Inject('DfgReportPoPayRepositoryToken') protected readonly repo:Repository<DfgReportPoPay>)
    {
        super();
    }
}
