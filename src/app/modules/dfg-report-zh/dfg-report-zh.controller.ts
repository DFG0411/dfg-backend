import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { DfgReportZh } from 'src/app/entities/dfg_report_zh.entity';
import { BaseController } from 'src/base';
import { DfgReportZhService } from './dfg-report-zh.service';



@ApiTags('dfg-report-zh')
@Controller('dfg-report-zh')

export class DfgReportZhController extends BaseController<DfgReportZh>{

     constructor(protected service:DfgReportZhService){

         super();
     }




}
