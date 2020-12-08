import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{DfgReportProductRcHincdAll} from 'src/app/entities/dfg_report_product_rchincdall.entity'
@Injectable()
export class DfgReportProductRchincdallService extends BaseService<DfgReportProductRcHincdAll> {

    constructor(
        @Inject('DfgReportProductRcHincdAllRepositoryToken')protected readonly repo:Repository<DfgReportProductRcHincdAll>)
      
        {
          super();
      
      }
      }
