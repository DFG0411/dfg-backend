import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoTqlv } from 'src/app/entities/dfg_report_po_tqlv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoTqlvService extends BaseService<DfgReportPoTqlv>{
    constructor(@Inject('DfgReportPoTqlvRepositoryToken') protected readonly repo:Repository<DfgReportPoTqlv>)
    {
        super();
    }
}
