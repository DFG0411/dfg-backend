import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoWorkloadV } from 'src/app/entities/dfg_report_po_workload_v.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoWorkloadVService extends BaseService<DfgReportPoWorkloadV>{
    constructor(@Inject('DfgReportPoWorkloadVRepositoryToken') protected readonly repo:Repository<DfgReportPoWorkloadV>)
    {
        super();
    }
}
