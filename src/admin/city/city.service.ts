import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { BaseService } from '../../base';


import { City } from '../entities/city.entity';

@Injectable()
export class CityService extends BaseService<City> {
  constructor(
    @Inject('CITY_MODEL_TOKEN')
    protected readonly repo: Repository<City>)
        {
          super()
        }
    
  }

  