import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { Po24m } from 'src/app/entities/Po24m.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Po24mService extends BaseService<Po24m>{
    constructor(
        @Inject('Po24mToken') protected readonly repo:Repository<Po24m>
    ){
        super();
    }
}
