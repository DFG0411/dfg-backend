import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoOpenFjsum } from 'src/app/entities/dfg_report_po_open_fjsum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoOpenFjsumService extends BaseService<DfgReportPoOpenFjsum>{
    constructor(@Inject('DfgReportPoOpenFjsumRepositoryToken') protected readonly repo:Repository<DfgReportPoOpenFjsum>)
    {
        super();
    }
}
