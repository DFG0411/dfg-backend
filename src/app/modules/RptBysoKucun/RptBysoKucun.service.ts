import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { RptBysoKucun } from 'src/app/entities/RptBysoKucun.entity';
import { Repository } from 'typeorm';


@Injectable()
export class RptBysoKucunService extends BaseService<RptBysoKucun>{
    constructor(
        @Inject('RptBysoKucunToken') protected readonly repo:Repository<RptBysoKucun>
    )
    {
        super();
    }
}
