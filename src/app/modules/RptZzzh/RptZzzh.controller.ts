import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import { RptZzzhService } from './RptZzzh.service';
import{RptZzzh} from 'src/app/entities/RptZzzh.entity';



@ApiTags('RptZzzh')
@Controller('RptZzzh')

export class RptZzzhController extends BaseController<RptZzzh>{
      constructor (protected service:RptZzzhService) {
         super();
      }  

}


