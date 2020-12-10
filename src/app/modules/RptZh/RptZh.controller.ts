import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { RptZh } from 'src/app/entities/RptZh.entity';
import { BaseController } from 'src/base';
import { RptZhService } from './RptZh.service';



@ApiTags('RptZh')
@Controller('RptZh')

export class RptZhController extends BaseController<RptZh>{

     constructor(protected service:RptZhService){

         super();
     }




}
