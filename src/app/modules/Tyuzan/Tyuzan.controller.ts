import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';
import { TyuzanService } from './Tyuzan.service';
import{Tyuzan} from 'src/app/entities/Tyuzan.entity';



@ApiTags('Tyuzan')
@Controller('Tyuzan')

export class TyuzanController extends BaseController<Tyuzan>{
      constructor (protected service:TyuzanService) {
         super();
      }  

}


