import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({name:'dfg_report_po_workload_h',
  expression: `SELECT  distinct
            po.cVenName ,
            y ,
            m ,
			d ,
			po.dPODate,
			cpoid,
 			po.cMaker
    FROM    dbo.dfg_report_po AS po`,
})
export class PoWorkloadH extends BaseEntity{
  @ViewColumn()
  cVenName: string | null;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  m: number | null;
  @ViewColumn()
  d: number | null;
  @ViewColumn()
  dPoDate: Date;
  @ViewColumn()
  cpoid: string | null;
  @ViewColumn()
  cMaker: string | null;
}
