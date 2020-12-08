import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoWorkloadH } from 'src/app/entities/dfg_report_po_workload_h.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoWorkloadHService extends BaseService<DfgReportPoWorkloadH> {
    constructor(@Inject('DfgReportPoWorkloadHRepositoryToken') protected readonly repo:Repository<DfgReportPoWorkloadH>)
    {
        super();
    }
}
