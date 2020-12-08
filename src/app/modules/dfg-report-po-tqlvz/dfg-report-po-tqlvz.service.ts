import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoTqlvZ } from 'src/app/entities/dfg_report_po_tqlvz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoTqlvzService extends BaseService<DfgReportPoTqlvZ>{
    constructor(@Inject('DfgReportPoTqlvZRepositoryToken') protected readonly repo:Repository<DfgReportPoTqlvZ>)
    {
        super();
    }
}
