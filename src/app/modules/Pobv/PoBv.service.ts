import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoBv } from 'src/app/entities/PoBv.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PoBvService extends BaseService<PoBv> {
    constructor(
        @Inject('PoBvToken') protected readonly repo:Repository<PoBv>
    )
    {
        super();
    }
}
