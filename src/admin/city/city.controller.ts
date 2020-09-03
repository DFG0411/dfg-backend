import {Body, Controller,  Param,  Patch, Put, UseGuards, Post, Get} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags, ApiParam, ApiBody,PartialType} from '@nestjs/swagger';
import {CityService} from './city.service';
import {BaseController} from '../../base';
import { City } from '../entities/city.entity';

@ApiTags('city')
@ApiBearerAuth()
@Controller('city')
export class CityController extends BaseController<City> {

	constructor(protected service: CityService) {
		super();
	}
}