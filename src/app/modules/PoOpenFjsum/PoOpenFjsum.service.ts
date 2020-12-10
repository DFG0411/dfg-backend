import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoOpenFjsum } from 'src/app/entities/PoOpenFjsum.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoOpenFjsumService extends BaseService<PoOpenFjsum>{
    constructor(@Inject('PoOpenFjsumToken') protected readonly repo:Repository<PoOpenFjsum>)
    {
        super();
    }
}
