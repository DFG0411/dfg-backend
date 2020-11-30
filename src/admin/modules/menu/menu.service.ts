import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import { Menu } from '../../entities/menu.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class MenuService extends BaseService<Menu> {
  constructor(
    @Inject('MENU_MODEL_TOKEN') protected readonly repo: Repository<Menu>,
    @Inject(forwardRef(() => UserService))
    protected readonly userService: UserService,
  ) {
    super();
  }

  public async GetMenu():Promise<Menu[]>{
      const roles=[4]
       return await this.GetMenuByRoles(roles);
  }
  public async GetMenuByUser(userId: number): Promise<Menu[]> {
    let roles: number[] = [4];
    if (userId) {
      const user = await this.userService.findOne(
        { id: userId },
        { relations: ['roles'] },
      );
      roles = user.roles ? user.roles.map((r) => (r.id ? r.id : 4)) : [4];
    }
    return await this.GetMenuByRoles(roles);
  }


    private async GetMenuByRoles(roles: number[])
    {
        const root = await this.repo
            .createQueryBuilder()
            .select()
            .where('parent_id is null')
            .andWhere('roles && :roles', { roles: roles })
            .orderBy('id')
            .getMany();

        for (const parent of root)
        {
            parent.children = await this.getChildren(parent, roles);
        };
        return root;
    }

  private async getChildren(parent: Menu, roles: number[]): Promise<Menu[]> {
    const children = await this.repo
      .createQueryBuilder()
      .select()
      .where('parent_id =:parent_id', { parent_id: parent.id })
      .andWhere('roles && :roles', { roles: roles })
      .orderBy('id')
      .getMany();

    if (children.length > 0) {
      for(const child of children) {
        child.children = await this.getChildren(child, roles);
      };
    }
    return children;
  }
}
