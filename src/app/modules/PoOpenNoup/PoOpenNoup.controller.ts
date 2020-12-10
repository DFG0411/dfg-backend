import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base';
import { PoOpenNoup } from 'src/app/entities/PoOpenNoup.entity';
import { PoOpenNoupService } from './PoOpenNoup.service';

@Controller('PoOpenNoup')
export class PoOpenNoupController extends BaseController<PoOpenNoup> {
    constructor(protected service:PoOpenNoupService)
    {
        super();
    }
}
