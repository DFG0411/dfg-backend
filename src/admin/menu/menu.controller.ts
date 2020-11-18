import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Menu } from '../entities/menu.entity';
import { MenuService } from './menu.service';

@ApiTags('menu')
// @ApiBearerAuth()
@Controller('menu')
export class MenuController {
  constructor(protected service: MenuService) {}
  @Get(':id')
  public async GetMenu(@Param('id') userId: number): Promise<Menu[]> {
    return await this.service.GetMenu(userId);
  }
}
