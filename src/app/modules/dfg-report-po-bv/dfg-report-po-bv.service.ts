import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoBv } from 'src/app/entities/dfg_report_po_bv.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DfgReportPoBvService extends BaseService<DfgReportPoBv> {
    constructor(
        @Inject('DfgReportPoBvRepositoryToken') protected readonly repo:Repository<DfgReportPoBv>
    )
    {
        super();
    }
}
