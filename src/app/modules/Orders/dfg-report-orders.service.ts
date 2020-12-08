import { Injectable, Inject } from '@nestjs/common';
import { DfgReportOrders } from 'src/app/entities/dfg_report_orders.entity';
import { BaseService } from 'src/base';
import { Repository } from 'typeorm';

@Injectable()
export class DfgReportOrdersService extends BaseService<DfgReportOrders> {
constructor(
    @Inject('DfgReportOrdersRepositoryToken') protected readonly repo: Repository<DfgReportOrders>)
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

