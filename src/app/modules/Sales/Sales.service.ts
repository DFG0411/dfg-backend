import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{Sales}from 'src/app/entities/Sales.entity'
@Injectable()
export class SalesService extends BaseService<Sales>{
    constructor(
        @Inject('SalesToken')protected readonly repo:Repository<Sales>)
      
        {
          super();
      
      }
      }
      