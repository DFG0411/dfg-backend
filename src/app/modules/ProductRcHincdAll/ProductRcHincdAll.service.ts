import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{ProductRcHincdAll} from 'src/app/entities/ProductRcHincdAll.entity'
@Injectable()
export class ProductRcHincdAllService extends BaseService<ProductRcHincdAll> {

    constructor(
        @Inject('ProductRcHincdAllToken')protected readonly repo:Repository<ProductRcHincdAll>)
      
        {
          super();
      
      }
      }
