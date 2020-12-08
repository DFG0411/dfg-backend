import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{DfgReportZh}from 'src/app/entities/dfg_report_zh.entity'
@Injectable()
export class DfgReportZhService extends BaseService<DfgReportZh> {
    
    constructor(
     
    @Inject('DfgReportZhRepositoryToken')protected readonly repo:Repository<DfgReportZh>)

    {
      super();

    }





}
