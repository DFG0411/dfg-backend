import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{DfgReportProductRcHincdAll} from 'src/app/entities/dfg_report_product_rchincdall.entity'
import{DfgReportProductRchincdallService}from './dfg-report-product-rchincdall.service'
@ApiTags('dfg-report-product-rchincdall')
@Controller('dfg-report-product-rchincdall')
export class DfgReportProductRchincdallController extends BaseController<DfgReportProductRcHincdAll> {
    constructor (protected service:DfgReportProductRchincdallService) {
        super();
     }  

}
