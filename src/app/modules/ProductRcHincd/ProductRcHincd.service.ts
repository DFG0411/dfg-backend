import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{ProductRcHincd} from 'src/app/entities/ProductRcHincd.entity'
@Injectable()
export class ProductRcHincdService extends BaseService<ProductRcHincd> {
    constructor(
        @Inject('ProductRcHincdToken')protected readonly repo:Repository<ProductRcHincd>)
      
        {
          super();
      
      }
      }
      
      
      