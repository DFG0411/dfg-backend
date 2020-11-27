import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT rc.iyear,rc.period,rc.cinvccodeX,
--CASE WHEN cz=0 THEN 0.00001 ELSE cz END AS 
cz,ISNULL(amnt,0) AS amnt,(ISNULL(amnt,0)/cz) AS LV
FROM dfg_report_product_rcHincdAll rc LEFT JOIN dfg_toolfeeSuperset fee ON rc.iyear=fee.iyear AND  rc.period=fee.period and rc.cinvccodeX=fee.itemcode`,
})
export class DfgReportZzzh {
  @ViewColumn()
  iyear: number | null;
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  cinvccodeX: string | null;
  @ViewColumn()
  cz: number | null;
  @ViewColumn()
  amnt: number;
  @ViewColumn()
  lv: number | null;
}
