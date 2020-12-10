import { Injectable, Inject } from '@nestjs/common';
import { Uninvoiced } from 'src/app/entities/Uninvoiced.entity';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
@Injectable()
export class UninvoicedService extends BaseService<Uninvoiced> {
    
    constructor(
     
    @Inject('UninvoicedToken')protected readonly repo:Repository<Uninvoiced>)

    {
      super();

    }





}
