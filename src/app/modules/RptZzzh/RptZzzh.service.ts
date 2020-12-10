import { Injectable,Inject } from '@nestjs/common';

import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{RptZzzh} from 'src/app/entities/RptZzzh.entity'
@Injectable()
export class RptZzzhService extends BaseService<RptZzzh> {
    constructor(
  @Inject('RptZzzhToken')protected readonly repo:Repository<RptZzzh>)

  {
    super();

}
}




