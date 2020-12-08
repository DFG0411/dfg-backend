import { Injectable,Inject } from '@nestjs/common';

import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{DfgReportZzzh} from 'src/app/entities/dfg_report_zzzh.entity'
@Injectable()
export class DfgReportZzzhService extends BaseService<DfgReportZzzh> {
    constructor(
  @Inject('DfgReportZzzhRepositoryToken')protected readonly repo:Repository<DfgReportZzzh>)

  {
    super();

}
}




