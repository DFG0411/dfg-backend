import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { DfgReportPoOpenNoup } from 'src/app/entities/dfg_report_po_open_noup.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DfgReportPoOpenNoupService extends BaseService<DfgReportPoOpenNoup> {
    constructor(@Inject('DfgReportPoOpenNoupRepositoryToken') protected readonly repo:Repository<DfgReportPoOpenNoup>
    )
    {
        super();
    }
}
