import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Menu } from '../../entities/menu.entity';
import { MenuService } from './menu.service';

@ApiTags('menu')
// @ApiBearerAuth()
@Controller('menu')
export class MenuController {
  constructor(protected service: MenuService) {}
  @Get('')
  public async GetMenu(): Promise<Menu[]> {
    return await this.service.GetMenu();
  }
  @Get(':id')
  public async GetMenuByUser(@Param('id') userId: number): Promise<Menu[]> {
    return await this.service.GetMenuByUser(userId);
  }
}
