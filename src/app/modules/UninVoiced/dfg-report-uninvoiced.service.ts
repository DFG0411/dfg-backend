import { Injectable, Inject } from '@nestjs/common';
import { DfgReportUninvoiced } from 'src/app/entities/dfg_report_uninvoiced.entity';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
@Injectable()
export class DfgReportUninvoicedService extends BaseService<DfgReportUninvoiced> {
    
    constructor(
     
    @Inject('DfgReportUninvoicedRepositoryToken')protected readonly repo:Repository<DfgReportUninvoiced>)

    {
      super();

    }





}
