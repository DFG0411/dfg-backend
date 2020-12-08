import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { DfgReportPoOpenNoup } from 'src/app/entities/dfg_report_po_open_noup.entity';
import { DfgReportPoOpenNoupService } from './dfg-report-po-open-noup.service';

@Controller('dfg-report-po-open-noup')
export class DfgReportPoOpenNoupController extends BaseController<DfgReportPoOpenNoup> {
    constructor(protected service:DfgReportPoOpenNoupService)
    {
        super();
    }
}
