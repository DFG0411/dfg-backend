import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoBv_24m } from 'src/app/entities/dfg_report_po_bv_24m.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoBv24mService extends BaseService<DfgReportPoBv_24m>{
    constructor(
        @Inject('DfgReportPoBv_24mRepositoryToken')
        protected readonly repo:Repository<DfgReportPoBv_24m>)
    {
        super();
    }
}
