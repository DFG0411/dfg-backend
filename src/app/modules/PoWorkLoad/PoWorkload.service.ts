import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoWorkload } from 'src/app/entities/PoWorkload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoWorkloadService extends BaseService<PoWorkload> {
    constructor(@Inject('PoWorkloadToken') protected readonly repo:Repository<PoWorkload>)
    {
        super();
    }
}
