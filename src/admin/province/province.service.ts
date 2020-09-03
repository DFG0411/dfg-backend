import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Repository, DeepPartial } from 'typeorm';
import { BaseService } from '../../base';
import { Province } from '../entities/province.entity';


@Injectable()
export class ProvinceService extends BaseService<Province> {
  constructor(    @Inject('PROVINCE_MODEL_TOKEN')
    protected readonly repo: Repository<Province>) 
    {
    super();
  } 
}
