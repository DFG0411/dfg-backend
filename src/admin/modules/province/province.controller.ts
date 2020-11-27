import {Controller} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {ProvinceService} from './province.service';
import {BaseController} from '../../../base';
import { Province } from '../../entities/province.entity';

@ApiTags('province')
@ApiBearerAuth()
@Controller('province')
export class ProvinceController extends BaseController<Province> {

	constructor(protected service: ProvinceService) {
		super();
	}

}

// import { object } from 'joi';
