import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportProductRc } from 'src/app/entities/dfg_report_product_rc.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportProductRcService extends BaseService<DfgReportProductRc> {
    constructor(@Inject('DfgReportProductRcRepositoryToken') protected readonly repo:Repository<DfgReportProductRc>)
    {
        super();
    }
}
