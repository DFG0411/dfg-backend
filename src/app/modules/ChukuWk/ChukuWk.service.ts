import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { ChukuWk } from 'src/app/entities/ChukuWk.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChukuWkService extends BaseService<ChukuWk> {
    constructor(
        @Inject('ChukuWkToken') protected readonly repo:Repository<ChukuWk>)        
    {
    super();
    }
}
