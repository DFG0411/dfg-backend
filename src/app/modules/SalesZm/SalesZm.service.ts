import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';

import{SalesZm}from 'src/app/entities/SalesZm.entity'
@Injectable()
export class SalesZmService extends BaseService<SalesZm> {
    constructor(
        @Inject('SalesZmToken')protected readonly repo:Repository<SalesZm>)
      
        {
          super();
      
      }
      }
      