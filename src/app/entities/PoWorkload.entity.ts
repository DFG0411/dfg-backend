import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({name:'dfg_report_po_workload',
  expression: `SELECT  
            po.cVenName ,
            y ,
            m ,
			d ,
			po.dPODate,
 			po.cMaker,
  --         pd.cInvCode ,
			--i.cInvStd,
   --         i.cInvCCode ,
			--i.cInvName,
   --         pam.dDate ,
   --         pm.dPODate ,
   --         pa.dRequirDate AS requiredate_a ,
   --         pd.dArriveDate AS requiredate_r ,
   --         DATEDIFF(DAY, pam.dDate, pm.dPODate) AS lt_dd ,
   --         DATEDIFF(DAY, pam.dDate, pa.dRequirDate) AS lt_plan ,
   --         CASE WHEN pm.cPTCode = '06' THEN '外协'
   --              WHEN pd.cDefine28 IS NOT NULL THEN '转卖'
   --              WHEN LEFT(i.cInvCCode, 1) = '1' THEN '材料'
   --              WHEN ISNULL(pd.cDefine34, 0) <> 0 THEN '部件'
   --              ELSE '自用'
   --         END AS [type] ,
			--COUNT(1) AS [workload],
            po.amount AS amount
			--sd.cDefine24,
			--sd.dPreDate
    FROM    dbo.dfg_report_po AS po
--GROUP BY po.cVenName ,
--	po.dPODate,
--            --CAST(YEAR(po.dPODate) AS NCHAR(4)) ,
--            --CAST(MONTH(po.dPODate) AS NVARCHAR(2)) ,
-- 			po.cMaker`,
})
export class PoWorkload extends BaseEntity{
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
  cMaker: string | null;
  @ViewColumn()
  amount: number | null;
}
