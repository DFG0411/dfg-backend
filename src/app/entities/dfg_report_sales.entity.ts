import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT --TOP 1 
			c.cCusCode,
            --sb.cDefine34 ,
            --sb.cDefine31 ,
            sb.iDLsID ,
            ISNULL(sd.cDefine25,'补充') AS pjf ,
            sbm.dDate ,
			MONTH(sbm.dDate)AS mon,
			YEAR(sbm.dDate)AS y,
            CONVERT(NVARCHAR(6), sbm.dDate, 112) AS period ,
            sb.cInvCode ,
            i.cInvName ,
            i.cInvStd ,
            i.cInvCCode ,
            CASE RIGHT(g.cinvccodeX,3) WHEN '001' THEN '机夹刀'
			WHEN '002' THEN '刀具'
			ELSE '刀柄' END AS hinshu ,
            CAST(ISNULL(up.outiunitprice, 0) AS FLOAT) AS OutUp ,
            CAST(ISNULL(up.outiunitprice, 0) AS FLOAT) * sb.iQuantity AS OutCost ,
            sb.iQuantity AS outQuantity ,
            sd.iNatUnitPrice AS sounitprice ,
            sb.iNatUnitPrice AS sbunitprice ,
            sb.iQuantity * ISNULL(sb.iNatUnitPrice, 0) AS outSbPrice ,
            sb.iQuantity * ISNULL(sb.iNatUnitPrice, 0) - CAST(ISNULL(up.outiunitprice, 0) AS FLOAT) * sb.iQuantity AS profit ,
            c.cCusAbbName ,
            CASE WHEN LEFT(i.cInvCCode, 3) IN ( '302', '305' )
                      AND i.bPurchase = 1 THEN '商'
                 WHEN LEFT(i.cInvCCode, 1) IN ( '3', '4' ) THEN '产'
                 WHEN LEFT(i.cInvCCode, 1) IN ( '1', '2' )
                      AND i.bPurchase = 1 THEN '商'
                 WHEN i.cInvCode = '6001' THEN '产'
                 WHEN i.cInvCode = '6002' THEN '商'
                 ELSE '它'
            END AS cs ,
			c.cCusDepart,
            u.cUser_Name AS salesman,
			ISNULL(stk.rdateDl,ISNULL(stk.rdateBsc,ISNULL(stk.ZRdate,ISNULL(stk.rdateKh,NULL)))) AS rkdate,
			stk.rdateKh AS ckdate,
			DATEDIFF(DAY,sm.dDate,sd.dPreDate) AS lt_plan,
			--sm.dDate,sbm.dDate,
			DATEDIFF(DAY,sm.dDate,ISNULL(stk.rdateDl,ISNULL(stk.rdateBsc,ISNULL(stk.ZRdate,ISNULL(stk.rdateKh,CASE WHEN sbm.dDate>sm.dDate THEN sbm.dDate ELSE sm.dDate END ))))) AS lt_rk,
			DATEDIFF(DAY,ISNULL(stk.rdateDl,ISNULL(stk.rdateBsc,ISNULL(stk.ZRdate,ISNULL(stk.rdateKh,sbm.dDate)))),ISNULL(stk.rdateKh,sbm.dDate)) AS lt_rc,
			DATEDIFF(DAY,ISNULL(stk.rdateKh,sbm.dDate),sbm.dDate) AS lt_cp,
			sb.cDefine34
    FROM    dbo.SaleBillVouchs AS sb
            JOIN dbo.SaleBillVouch AS sbm ON sbm.SBVID = sb.SBVID
            LEFT JOIN dbo.Warehouse ON sb.cWhCode = Warehouse.cWhCode
            LEFT JOIN dbo.Inventory AS i ON sb.cInvCode = i.cInvCode
            LEFT JOIN dbo.Dfg_co_Group AS g ON i.cInvCCode = g.cinvccode
            LEFT JOIN dbo.SO_SODetails AS sd ON sd.cDefine34 = sb.cDefine34
                                                AND sd.cInvCode = sb.cInvCode
            LEFT JOIN dbo.SO_SOMain AS sm ON sm.ID = sd.ID
			LEFT JOIN [Dfg_cs_CurrentstockNoBatch] AS stk ON stk.cDefine34 = sb.cDefine34 AND stk.cinvcode = sb.cInvCode
            LEFT JOIN dbo.Customer AS c ON c.cCusCode = sm.cCusCode
            LEFT JOIN dbo.UA_User AS u ON c.cCusPPerson = u.cUser_Id
            LEFT JOIN dbo.dfg_co_unitprice_out_wh_so AS up ON sb.cWhCode = up.cWhCode
                                                          AND sb.cInvCode = up.cInvCode
    WHERE   sb.iDLsID IS  NOT NULL
	--AND ISNULL(stk.rdateDl,ISNULL(stk.rdateBsc,ISNULL(stk.ZRdate,ISNULL(stk.rdateKh,NULL)))) IS NULL`,
})
export class DfgReportSales extends BaseEntity{
  @ViewColumn()
  cCusCode: string | null;
  @ViewColumn()
  iDLsId: number | null;
  @ViewColumn()
  pjf: string;
  @ViewColumn()
  dDate: Date;
  @ViewColumn()
  mon: number | null;
  @ViewColumn()
  y: number | null;
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
  hinshu: string;
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
  cCusDepart: string | null;
  @ViewColumn()
  salesman: string | null;
  @ViewColumn()
  rkdate: Date | null;
  @ViewColumn()
  ckdate: Date | null;
  @ViewColumn()
  lt_Plan: number | null;
  @ViewColumn()
  lt_Rk: number | null;
  @ViewColumn()
  lt_Rc: number | null;
  @ViewColumn()
  lt_Cp: number | null;
  @ViewColumn()
  cDefine34: number | null;
}
