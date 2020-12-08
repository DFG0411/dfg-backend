import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoPricecompare } from 'src/app/entities/dfg_report_po_pricecompare.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportPoPricecompareService extends BaseService<DfgReportPoPricecompare>{
    constructor(@Inject('DfgReportPoPricecompareRepositoryToken')
                protected readonly repo:Repository<DfgReportPoPricecompare>            
    )
    {
        super();
    }
}
