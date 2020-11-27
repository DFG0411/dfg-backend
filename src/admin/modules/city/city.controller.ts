import {Body, Controller,  Param,  Patch, Put, UseGuards, Post, Get} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags, ApiParam, ApiBody,PartialType} from '@nestjs/swagger';
import { CityService } from './city.service';
import {City} from '../../entities/city.entity';
import { DeepPartial } from 'typeorm';
// import { CreateUserDto, UpdateUserDto, CreateUserWithRolesDto } from './dto/user.input';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { UserRoleDto } from '../user-role/dto/user-role.dto';
@ApiTags('city')
@ApiBearerAuth()
// @UseGuards(RolesGuard)
@Controller('cities')
export class CityController{

	constructor(protected service: CityService) {
	}
	@Get()
	async findAll():Promise<City[]>{
		return this.service.findAll();
	}
	@Get('pid/:id')
	async findByPid(@Param('id') pid:string):Promise<City[]>{
		// console.log('ctl pid:'+pid)
		return this.service.findByPid(pid);
	}

	@Get(':id')
	async findOne(id:string):Promise<City>{
		return this.service.findOneById(id);
	}

}

