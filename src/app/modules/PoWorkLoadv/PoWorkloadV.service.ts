import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoWorkloadV } from 'src/app/entities/PoWorkloadV.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoWorkloadVService extends BaseService<PoWorkloadV>{
    constructor(@Inject('PoWorkloadVToken') protected readonly repo:Repository<PoWorkloadV>)
    {
        super();
    }
}
