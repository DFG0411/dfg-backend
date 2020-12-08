import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  DISTINCT
            po.cVenName ,
            y ,
            m ,
			d ,
			po.dPODate,
			--cpoid,
 			po.cMaker
    FROM    dbo.dfg_report_po AS po`,
})
export class DfgReportPoWorkloadV extends BaseEntity {
  @ViewColumn()
  cVenName: string;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  m: number | null;
  @ViewColumn()
  d: number | null;
  @ViewColumn()
  dPoDate: Date;
  @ViewColumn()
  cMaker: string | null;
}
