import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import{DfgReportProductRcHincd} from 'src/app/entities/dfg_report_product_rchincd.entity'
import{DfgReportProductRchincdService} from './dfg-report-product-rchincd.service'
@ApiTags('dfg-report-product-rchincd')
@Controller('dfg-report-product-rchincd')
export class DfgReportProductRchincdController extends BaseController<DfgReportProductRcHincd> {
    constructor (protected service:DfgReportProductRchincdService) {
        super();
     }  

}
