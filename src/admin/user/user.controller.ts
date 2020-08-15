import {Body, Controller,  Param,  Patch, Put, UseGuards, Post} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';

import {ApiBearerAuth, ApiTags, ApiParam, ApiBody,PartialType} from '@nestjs/swagger';
import {UserService} from './user.service';
import {User} from '../entities/user.entity';
import {BaseController} from '../../base';
import { Roles } from '../auth/decorators/roles.decorator';
import { DeepPartial } from 'typeorm';
import { CreateUserDto, UpdateUserDto, CreateUserWithRolesDto } from './dto/user.input';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRoleDto } from '../user-role/dto/user-role.dto';
@ApiTags('users')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('users')
export class UserController extends BaseController<User> {

	constructor(protected service: UserService) {
		super();
	}
	@Put('/:id')
	@Roles('admin')
	@ApiParam({name:'id',type:Number})
	@ApiBody({type: CreateUserDto})
	public async update( @Param('id') id: number, @Body() data: UpdateUserDto): Promise<User> {
		return this.service.update(id, data);
	}
	
	@Patch('/:id')
	@Roles('admin')
	@ApiParam({name:'id',type:Number})
	@ApiBody({type: CreateUserDto})
	public async patch(@Param('id') id: number, @Body() data: UpdateUserDto): Promise<User> {
		return this.service.patch(id, data);
	}

	@Post('/:id')
	@Roles('admin')
	@ApiParam({name:'id',type:Number})
	@ApiBody({type: [UserRoleDto]})
	public async assinRoles(@Param('id') id: number, @Body() data: UserRoleDto[]): Promise<User> {
		return this.service.assignRoles(id, data);
	}
	
	@Post('withroles')
	@Roles('admin')
	@ApiBody({type:CreateUserWithRolesDto})
	async createWithRoles(@Body() data:CreateUserWithRolesDto): Promise<User>{
		return this.service.createWithRoles(data);
	}

	@Post('')
	@ApiBody({type:CreateUserDto})
	async create(@Body() data:CreateUserDto): Promise<User>{
		return this.service.create(data);
	}

}

// import { object } from 'joi';
