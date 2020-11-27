import {
  Body,
  Controller,
  Param,
  Patch,
  Put,
  UseGuards,
  Post,
  Get,
} from '@nestjs/common';
// import {AuthGuard} from '@nestjs/passport';
// import * as _ from 'lodash';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DatajsonService } from './datajson.service';

@ApiTags('datajson')
@ApiBearerAuth()
@Controller('Datajson')
export class DatajsonController {
  constructor(protected service: DatajsonService) {}
  @Get()
  public async GetMenu(): Promise<any> {
    return await this.service.GetMenu();
  }
}
