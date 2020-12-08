import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoOpen } from 'src/app/entities/dfg_report_po_open.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoOpenService extends BaseService<DfgReportPoOpen> {
    constructor(@Inject('DfgReportPoOpenRepositoryToken') protected readonly repo:Repository<DfgReportPoOpen>)
    {
        super();
    }
}
