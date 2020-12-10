import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoOpen } from 'src/app/entities/PoOpen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoOpenService extends BaseService<PoOpen> {
    constructor(@Inject('PoOpenToken') protected readonly repo:Repository<PoOpen>)
    {
        super();
    }
}
