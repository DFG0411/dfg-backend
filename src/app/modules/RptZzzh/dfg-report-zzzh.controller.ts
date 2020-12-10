import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import { DfgReportZzzhService } from './dfg-report-zzzh.service';
import{DfgReportZzzh} from 'src/app/entities/dfg_report_zzzh.entity';



@ApiTags('dfg-report-zzzh')
@Controller('dfg-report-zzzh')

export class DfgReportZzzhController extends BaseController<DfgReportZzzh>{
      constructor (protected service:DfgReportZzzhService) {
         super();
      }  

}


