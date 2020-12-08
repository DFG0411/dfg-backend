import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{DfgReportSales}from 'src/app/entities/dfg_report_sales.entity'
@Injectable()
export class DfgReportSalesService extends BaseService<DfgReportSales>{
    constructor(
        @Inject('DfgReportSalesRepositoryToken')protected readonly repo:Repository<DfgReportSales>)
      
        {
          super();
      
      }
      }
      