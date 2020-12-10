import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { ProductRc } from 'src/app/entities/ProductRc.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRcService extends BaseService<ProductRc> {
    constructor(@Inject('ProductRcToken') protected readonly repo:Repository<ProductRc>)
    {
        super();
    }
}
