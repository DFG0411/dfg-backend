import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';
import { Orders } from 'src/app/entities/Orders.entity';

@Injectable()
export class OrdersService extends BaseService<Orders> {
constructor(
    @Inject('OrdersToken') protected readonly repo: Repository<Orders>)
    {
    super();
  }
}
//   async GetOrders():Promise <any>{
//     return await this.repo.find()
//   }
  
//   public async test(): Promise<any>
//   {

//     //console.log(await this.repo.createQueryBuilder().select("Menu").where('parent_id is null').getMany());
//     const nn=await this.repo.createQueryBuilder().select().where('parent_id is null').getMany();
    
//     console.log(nn);
//     return nn
//   }

