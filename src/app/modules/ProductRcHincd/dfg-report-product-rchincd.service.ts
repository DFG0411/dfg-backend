import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{DfgReportProductRcHincd} from 'src/app/entities/dfg_report_product_rchincd.entity'
@Injectable()
export class DfgReportProductRchincdService extends BaseService<DfgReportProductRcHincd> {
    constructor(
        @Inject('DfgReportProductRcHincdRepositoryToken')protected readonly repo:Repository<DfgReportProductRcHincd>)
      
        {
          super();
      
      }
      }
      
      
      