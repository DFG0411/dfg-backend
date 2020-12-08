import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPo_24m } from 'src/app/entities/dfg_report_po_24m.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPo24mService extends BaseService<DfgReportPo_24m>{
    constructor(
        @Inject('DfgReportPo_24m') protected readonly repo:Repository<DfgReportPo_24m>
    ){
        super();
    }
}
