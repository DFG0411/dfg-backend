import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoPricecompare } from 'src/app/entities/dfg_report_po_pricecompare.entity';
import { DfgReportPoPricecompareService } from './dfg-report-po-pricecompare.service';

@Controller('dfg-report-po-pricecompare')
export class DfgReportPoPricecompareController extends BaseController<DfgReportPoPricecompare>{
    constructor(protected service:DfgReportPoPricecompareService)
    {
        super();
    }
}
