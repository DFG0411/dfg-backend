import {
  Body,
  Get,
  Param,
  Query,
  Controller,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { StockTakingService } from './stocktaking.service';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { StockTakingFindCondition } from '../misc/findcondition';
import { StockTaking } from 'src/appentities/stocktaking.entity';
import { DeepPartial } from 'typeorm';
@Controller('/api/stocktaking')
export class StockTakingController {
  constructor(protected service: StockTakingService) {}
  @Get()
  public async find(
    @Query() query: StockTakingFindCondition,
  ): Promise<StockTaking[]> {
    // console.log(JSON.stringify(query));
    // const field = query.type;
    // const term = query.term;
    return this.service.find(query);
  }
  @Post()
  public async insert(@Body() body: DeepPartial<StockTaking>) {
    // console.log(body);
    return this.service.add(body);
  }
  @Put()
  public async update(@Body() body: DeepPartial<StockTaking>) {
    return this.service.update(body);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
