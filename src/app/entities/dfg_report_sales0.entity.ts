import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT --TOP 1 
	--c.cCusCode,
	sb.cDefine34,
	sb.cDefine31,
	sb.iDLsID,
	sbm.dDate,
        sd.cDefine25 AS pjf,
		year(sbm.dDate) AS iYear,
		MONTH(sbm.dDate) AS iMonth,
        CONVERT(NVARCHAR(6),sbm.dDate,112) AS period ,
        sb.cInvCode ,
        i.cInvName ,
        i.cInvStd ,
        i.cInvCCode ,
        g.cinvccodeX ,
--        cRdName ,
        CAST(ISNULL(up.outiunitprice, 0) AS FLOAT) AS OutUp ,
		CAST(ISNULL(up.outiunitprice, 0) AS FLOAT)*sb.iQuantity AS OutCost,
        sb.iQuantity AS outQuantity ,
        --ia.cPZID ,
        --ia.AutoID ,
        --ia.cVouType ,
        --ia.iPZID ,
        sd.iNatUnitPrice AS sounitprice ,
        sb.iNatUnitPrice AS sbunitprice ,
        --CAST(ISNULL(ia.iAOutQuantity, 0) AS FLOAT) * ISNULL(sd.iNatUnitPrice, 0) AS outSoPrice ,
        sb.iQuantity * ISNULL(sb.iNatUnitPrice, 0) AS outSbPrice ,
		sb.iQuantity * ISNULL(sb.iNatUnitPrice, 0)-CAST(ISNULL(up.outiunitprice, 0) AS FLOAT)*sb.iQuantity  AS profit,
        c.cCusAbbName ,
        CASE ia.cInvHead
          WHEN '140501' THEN '产'
          ELSE '商'
        END AS cs ,
        u.cUser_Name AS salesman
FROM    
dbo.SaleBillVouchs AS sb
		JOIN dbo.SaleBillVouch AS sbm ON sbm.SBVID = sb.SBVID
		LEFT JOIN dbo.IA_Subsidiary AS ia ON ia.idlsid = sb.iDLsID AND ia.cVouType='32'
        LEFT JOIN dbo.Warehouse ON sb.cWhCode = Warehouse.cWhCode
        LEFT JOIN dbo.Inventory AS i ON sb.cInvCode = i.cInvCode
        LEFT JOIN dbo.Dfg_co_Group AS g ON i.cInvCCode = g.cinvccode
        LEFT JOIN dbo.SO_SODetails AS sd ON sd.cDefine34 = sb.cDefine34
                                            AND sd.cInvCode = sb.cInvCode
        LEFT JOIN dbo.SO_SOMain AS sm ON sm.ID = sd.ID
        LEFT JOIN dbo.Customer AS c ON c.cCusCode = sm.cCusCode
        LEFT JOIN dbo.UA_User AS u ON c.cCusPPerson = u.cUser_Id
        LEFT JOIN dfg_co_unitprice_out_wh_so AS up ON sb.cWhCode=up.cwhcode AND sb.cInvCode=up.cinvcode
WHERE  sb.iDLsID IS  NOT NULL`,
})
export class DfgReportSales0 {
  @ViewColumn()
  cDefine34: number | null;
  @ViewColumn()
  cDefine31: string | null;
  @ViewColumn()
  iDLsId: number | null;
  @ViewColumn()
  dDate: Date;
  @ViewColumn()
  pjf: string | null;
  @ViewColumn()
  iYear: number | null;
  @ViewColumn()
  iMonth: number | null;
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  cInvCode: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  cinvccodeX: string | null;
  @ViewColumn()
  outUp: number | null;
  @ViewColumn()
  outCost: number | null;
  @ViewColumn()
  outQuantity: number | null;
  @ViewColumn()
  sounitprice: number | null;
  @ViewColumn()
  sbunitprice: number | null;
  @ViewColumn()
  outSbPrice: number | null;
  @ViewColumn()
  profit: number | null;
  @ViewColumn()
  cCusAbbName: string | null;
  @ViewColumn()
  cs: string;
  @ViewColumn()
  salesman: string | null;
}
