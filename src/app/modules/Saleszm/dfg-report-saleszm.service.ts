import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';

import{DfgReportSalesZm}from 'src/app/entities/dfg_report_saleszm.entity'
@Injectable()
export class DfgReportSaleszmService extends BaseService<DfgReportSalesZm> {
    constructor(
        @Inject('DfgReportSalesZmRepositoryToken')protected readonly repo:Repository<DfgReportSalesZm>)
      
        {
          super();
      
      }
      }
      