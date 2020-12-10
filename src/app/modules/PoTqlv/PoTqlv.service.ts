import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoTqlv } from 'src/app/entities/PoTqlv.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoTqlvService extends BaseService<PoTqlv>{
    constructor(@Inject('PoTqlvToken') protected readonly repo:Repository<PoTqlv>)
    {
        super();
    }
}
