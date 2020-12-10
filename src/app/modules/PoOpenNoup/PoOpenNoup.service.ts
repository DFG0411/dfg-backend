import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { PoOpenNoup } from 'src/app/entities/PoOpenNoup.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PoOpenNoupService extends BaseService<PoOpenNoup> {
    constructor(@Inject('PoOpenNoupToken') protected readonly repo:Repository<PoOpenNoup>
    )
    {
        super();
    }
}
