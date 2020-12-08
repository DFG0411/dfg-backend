import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT iNatMoney ,
sm.cCusCode, 
YEAR(sm.dDate)AS y,
MONTH(sm.ddate)AS m,
ven.cInvCCode ,
cus.cCusAbbName,
so.cDefine25
FROM so_somain AS sm 
JOIN  so_sodetails AS so ON so.ID = sm.ID  
LEFT JOIN dbo.Inventory AS ven ON ven.cInvCode = so.cInvCode
LEFT JOIN dbo.Customer AS cus ON cus.cCusCode = sm.cCusCode
WHERE sm.dDate>'2016-12-31'`,
})
export class DfgReportZh extends BaseEntity {
  @ViewColumn()
  iNatMoney: number | null;
  @ViewColumn()
  cCusCode: string | null;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  m: number | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  cCusAbbName: string | null;
  @ViewColumn()
  cDefine25: string | null;
}
