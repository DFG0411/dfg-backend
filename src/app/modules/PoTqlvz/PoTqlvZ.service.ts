import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoTqlvZ } from 'src/app/entities/PoTqlvZ.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoTqlvZService extends BaseService<PoTqlvZ>{
    constructor(@Inject('PoTqlvZToken') protected readonly repo:Repository<PoTqlvZ>)
    {
        super();
    }
}
