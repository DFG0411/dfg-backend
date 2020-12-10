import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { RptPo } from 'src/app/entities/RptPo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RptPoService extends BaseService<RptPo>{
    constructor(@Inject('RptPoToken') protected readonly repo:Repository<RptPo>)
    {
        super();
    }
}
