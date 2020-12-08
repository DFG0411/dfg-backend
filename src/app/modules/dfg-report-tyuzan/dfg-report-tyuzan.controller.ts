import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import { DfgReportTyuzanService } from './dfg-report-tyuzan.service';
import{DfgReportTyuzan} from 'src/app/entities/dfg_report_tyuzan.entity';



@ApiTags('dfg-report-tyuzan')
@Controller('dfg-report-tyuzan')

export class DfgReportTyuzanController extends BaseController<DfgReportTyuzan>{
      constructor (protected service:DfgReportTyuzanService) {
         super();
      }  

}


