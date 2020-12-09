import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoPay24m } from 'src/app/entities/PoPay24m.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoPay24mService extends BaseService<PoPay24m> {
    constructor(@Inject('PoPay24mToken') protected readonly repo:Repository<PoPay24m>
    )
    {
        super();
    }
}
