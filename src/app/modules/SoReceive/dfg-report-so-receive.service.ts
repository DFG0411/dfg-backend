import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{DfgReportSoReceive}from 'src/app/entities/dfg_report_so_receive.entity'

@Injectable()
export class DfgReportSoReceiveService extends BaseService<DfgReportSoReceive>{
    constructor(
        @Inject('DfgReportSoReceiveRepositoryToken')protected readonly repo:Repository<DfgReportSoReceive>)
      
        {
          super();
      
      }
      }
      