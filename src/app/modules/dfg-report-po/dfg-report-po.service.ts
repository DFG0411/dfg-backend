import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPo } from 'src/app/entities/dfg_report_po.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoService extends BaseService<DfgReportPo>{
    constructor(@Inject('DfgReportPoRepositoryToken') protected readonly repo:Repository<DfgReportPo>)
    {
        super();
    }
}
