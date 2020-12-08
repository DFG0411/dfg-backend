import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';

import{DfgReportTyuzan}from 'src/app/entities/dfg_report_tyuzan.entity'
@Injectable()
export class DfgReportTyuzanService extends BaseService<DfgReportTyuzan>{
    constructor(
        @Inject('DfgReportTyuzanRepositoryToken')protected readonly repo:Repository<DfgReportTyuzan>)
      
        {
          super();
      
      }
      }
      