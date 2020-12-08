import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportBySoKuCun } from 'src/app/entities/dfg_report_bysokucun.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DfgReportBysokucunService extends BaseService<DfgReportBySoKuCun>{
    constructor(
        @Inject('DfgReportBySoKuCunRepositoryToken') protected readonly repo:Repository<DfgReportBySoKuCun>
    )
    {
        super();
    }
}
