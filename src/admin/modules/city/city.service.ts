
import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
// import { USER_MODEL_TOKEN_MSSQL } from '../server.constants';
import { BaseService } from '../../../base';
import { City} from '../../entities/city.entity';
// import { hashSync, compareSync } from 'bcryptjs';
// import { UserLoginDto } from './dto/user.login.dto';
// import { IToken } from 'src/auth/interfaces/token.interface';
// import {
//   ResetPasswordDto,
//   UpdateUserDto,
//   CreateUserDto,
//   CreateUserWithRolesDto,
// } from './dto/user.input';
// import { UserRoleService } from '../user-role/user-role.service';
// import { UserRole } from '../entities/user-role.entity';
// import { UserRoleDto } from '../user-role/dto/user-role.dto';
@Injectable()
export class CityService  {
  constructor(
    @Inject('CITY_MODEL_TOKEN')
    protected readonly repo: Repository<City>,

    // protected readonly roleService: UserRoleService,
  ) { }

  async findAll():Promise <City[]>{
    return this.repo.find();
  }
  async findOneById(id:string):Promise<City>{
    return this.repo.findOne(id);
  }

  async findByPid(pid:string):Promise<City[]>{
    // console.log('pid:'+pid)
    const cities=this.repo.find({where:{pid},select:['id','name']})

    return cities;
  }
}


