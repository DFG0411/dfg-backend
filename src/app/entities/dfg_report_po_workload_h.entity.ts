import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
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
export class DfgReportPoWorkloadH {
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
