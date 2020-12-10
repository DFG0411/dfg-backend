import { Inject, Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import{RptZh}from 'src/app/entities/RptZh.entity'
@Injectable()
export class RptZhService extends BaseService<RptZh> {
    
    constructor(
     
    @Inject('RptZhToken')protected readonly repo:Repository<RptZh>)

    {
      super();

    }





}
