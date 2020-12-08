import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportProductRc } from 'src/app/entities/dfg_report_product_rc.entity';
import { DfgReportProductRcService } from './dfg-report-product-rc.service';

@Controller('dfg-report-product-rc')
export class DfgReportProductRcController extends BaseController<DfgReportProductRc> {
    constructor(protected service:DfgReportProductRcService)
    {
        super();
    }
}
