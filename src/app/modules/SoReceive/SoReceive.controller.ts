import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { from } from 'rxjs';
import { BaseController } from 'src/base';

import{SoReceiveService}from './SoReceive.service'
import{SoReceive} from 'src/app/entities/SoReceive.entity'
@ApiTags('SoReceive')
@Controller('SoReceive')


export class SoReceiveController extends BaseController<SoReceive>{

    constructor (protected service:SoReceiveService) {
        super();
     }  

}


