import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoWorkloadH } from 'src/app/entities/PoWorkloadH.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoWorkloadHService extends BaseService<PoWorkloadH> {
    constructor(@Inject('PoWorkloadHToken') protected readonly repo:Repository<PoWorkloadH>)
    {
        super();
    }
}
