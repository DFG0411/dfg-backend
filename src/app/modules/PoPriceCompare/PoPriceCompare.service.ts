import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoPriceCompare } from 'src/app/entities/PoPriceCompare.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoPriceCompareService extends BaseService<PoPriceCompare>{
    constructor(@Inject('PoPriceCompareToken')
                protected readonly repo:Repository<PoPriceCompare>            
    )
    {
        super();
    }
}
