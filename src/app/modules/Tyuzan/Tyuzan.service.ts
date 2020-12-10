import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';

import{Tyuzan}from 'src/app/entities/Tyuzan.entity'
@Injectable()
export class TyuzanService extends BaseService<Tyuzan>{
    constructor(
        @Inject('TyuzanToken')protected readonly repo:Repository<Tyuzan>)
      
        {
          super();
      
      }
      }
      