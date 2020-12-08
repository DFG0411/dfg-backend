import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportChuKuWk } from 'src/app/entities/dfg_report_chukuwk.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportChukuwkService extends BaseService<DfgReportChuKuWk> {
    constructor(
        @Inject('DfgReportChuKuWkRepositoryToken') protected readonly repo:Repository<DfgReportChuKuWk>)        
    {
    super();
    }
}
