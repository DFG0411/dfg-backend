import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoPay } from 'src/app/entities/PoPay.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PoPayService extends BaseService<PoPay> {
    constructor(@Inject('PoPayToken') protected readonly repo:Repository<PoPay>)
    {
        super();
    }
}
