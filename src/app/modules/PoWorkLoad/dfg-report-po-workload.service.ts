import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoWorkload } from 'src/app/entities/dfg_report_po_workload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoWorkloadService extends BaseService<DfgReportPoWorkload> {
    constructor(@Inject('DfgReportPoWorkloadRepositoryToken') protected readonly repo:Repository<DfgReportPoWorkload>)
    {
        super();
    }
}
