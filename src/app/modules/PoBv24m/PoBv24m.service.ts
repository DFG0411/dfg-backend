import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoBv24m } from 'src/app/entities/PoBv24m.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoBv24mService extends BaseService<PoBv24m>{
    constructor(
        @Inject('PoBv24mToken')
        protected readonly repo:Repository<PoBv24m>)
    {
        super();
    }
}
