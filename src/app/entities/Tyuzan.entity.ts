import { BaseEntity, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({name:'dfg_report_tyuzan',
  expression: `SELECT TOP 100 PERCENT
  so.cSOCode ,
  so.iRowNo ,
  so.cInvCode ,
  i.cInvName ,
  i.cInvAddCode ,
  i.cInvStd ,
  so.dPreDate ,
    MONTH(sm.dDate)AS mon,
    YEAR(sm.dDate)AS y,
  ISNULL(stk.QtyDl, 0) + ISNULL(stk.QtyBsc, 0) + ISNULL(stk.QtyKh, 0) + ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) AS rk ,
  so.iQuantity ,
  CASE WHEN so.iQuantity - ( ISNULL(stk.QtyDl, 0) + ISNULL(stk.QtyBsc, 0) + ISNULL(stk.QtyKh, 0) + ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) ) >= 0
       THEN so.iQuantity - ( ISNULL(stk.QtyDl, 0) + ISNULL(stk.QtyBsc, 0) + ISNULL(stk.QtyKh, 0) + ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) )
       ELSE 0
  END AS wrk ,
  c.cCusName ,
  i.cInvCCode ,
  sm.dDate ,
    CASE WHEN DATEDIFF(ww,GETDATE(),so.dpredate)<=-6 THEN -6
         WHEN DATEDIFF(ww,GETDATE(),so.dpredate)>=6 THEN 6
          ELSE DATEDIFF(ww,GETDATE(),so.dpredate)
          END AS lt_dd ,
    --DATEDIFF(ww,so.dpredate,GETDATE())lt_jh,
    --DATEDIFF(ww,sm.ddate,so.dPreDate) AS lt_plan,
    CONVERT(NVARCHAR(6), sm.dDate, 112) AS period ,
  so.iNatUnitPrice ,
  CASE WHEN so.iQuantity - ( ISNULL(stk.QtyDl, 0) + ISNULL(stk.QtyBsc, 0) + ISNULL(stk.QtyKh, 0) + ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) ) >= 0
       THEN so.iQuantity - ( ISNULL(stk.QtyDl, 0) + ISNULL(stk.QtyBsc, 0) + ISNULL(stk.QtyKh, 0) + ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) )
       ELSE 0
  END * so.iNatUnitPrice AS iNatMoney ,
  so.iNatMoney AS soiNatMoney ,
  sm.cMaker ,
  CONVERT(VARCHAR(10), so.cDefine36, 111) AS ctDate ,
  CASE WHEN mo.SoDId IS NOT NULL THEN CONVERT(VARCHAR(10), mo.CreateTime, 111)
       ELSE CONVERT(VARCHAR(10), po.dpodate, 111)
  END AS trDate ,
  CASE WHEN mo.SoDId IS NOT NULL THEN p1.cUser_Name
       ELSE po.cmaker
  END AS cPsn_Name ,
  CASE WHEN mo.SoDId IS NOT NULL THEN mo.Qty
       ELSE po.iquantity
  END AS Qty ,
  --CASE WHEN CompleteQty > 0 THEN '本体完'
  --     ELSE DESCRIPTION
  --END AS DESCRIPTION ,
  ISNULL(d1.DocDate , d2.DocDate) AS docdate ,
  CASE WHEN d1.OpCode LIKE 'zi%'
            OR d1.DocDate IS NOT NULL THEN '本体完成'
       ELSE d1.Description
  END AS description ,
  ISNULL(stk.QtyBsc, 0) AS BCKS ,
  ISNULL(stk.QtyKh, 0) AS KCKS ,
  ISNULL(stk.QtyYK, 0) AS kps ,
  p.cPersonName AS ywy ,
  CASE WHEN so.iQuantity - ( ISNULL(stk.QtyDl, 0) + ISNULL(stk.QtyBsc, 0) + ISNULL(stk.QtyKh, 0) + ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) ) > 0
       THEN 1
       ELSE 0
  END AS Wrks ,
  sm.cDepCode ,
  sm.cDefine14 AS hlistno ,
  so.cDefine32 AS kcno ,
  so.cDefine33 AS biko ,
  so.cDefine25 AS JUKB ,
  st.cSTName ,
  sm.cDefine14 ,
  ISNULL(stk.QtyDl, 0) AS qtydl ,
  ISNULL(stk.QtyBsc, 0) AS qtybsc ,
  ISNULL(stk.QtyKh, 0) AS qtykh ,
  ISNULL(stk.QtyDF, 0) AS qtydf ,
  ISNULL(stk.QtyZC, 0) AS qtyzc ,
  ISNULL(stk.QtyZR, 0) AS qtyzr ,
  CASE WHEN LEFT(i.cInvCCode, 3) IN ( '302', '305' ) THEN '商'
       WHEN pa.isodid IS NOT NULL
            AND LEFT(i.cInvCCode, 3) = '303' THEN '商'
       WHEN LEFT(i.cInvCCode, 1) IN ( '3', '4' ) THEN '产'
       WHEN LEFT(i.cInvCCode, 1) IN ( '2', '1' ) THEN '商'
       ELSE '它'
  END AS chanshang ,
  sm.cCusCode ,
  d.cDepName ,
  g.Grp ,
  so.cDefine25 ,
  CASE WHEN caigoudi.cgd IS NULL THEN pa.cDefine29
       ELSE caigoudi.cgd
  END AS changpai ,
    CASE WHEN ISNULL(po.iquantity,0) >0 THEN po.imoney/po.iquantity ELSE ISNULL(pa.ioricost,up.iunitprice)
  END AS yuanbicg ,
  ISNULL(pa.cexch_name, '人民币') AS Curid ,
  CASE WHEN pa.isodid IS NOT NULL
            AND ( i.cInvCCode LIKE '301%'
                  OR i.cInvCCode LIKE '304%'
                ) THEN 1
       --WHEN i.cInvCCode LIKE '304%' THEN 1
       ELSE 0
  END AS wx ,--外协
  CASE WHEN c.cCCCode = 90 THEN '外'
       ELSE '内'
  END AS LO ,
  CASE WHEN ( so.iQuantity - ( ISNULL(stk.QtyYK, 0) + ISNULL(stk.QtyDF, 0) ) > 0 ) THEN 0
       ELSE 1
  END AS qk , --全开
  sm.cSTCode ,
  p.cPersonCode ,
  c.cCusAbbName ,
  cc.cCCName ,
  so.dPreMoDate ,
  so.cDefine34 ,
  sm.cexch_name ,
  pa.iOriCost ,
  pa.fUnitPrice ,
  pa.fQuantity ,
  pa.fUnitPrice * pa.fQuantity AS puMoney ,
    --pa.cexch_name,
  so.iNatUnitPrice * ISNULL(stk.QtyDl, 0) AS moneydl ,
  so.iNatUnitPrice * ISNULL(stk.QtyBsc, 0) AS moneybsc,
    up.iunitprice AS chengbenjia,
    so.dbclosedate
FROM    dbo.SO_SODetails AS so
  JOIN dbo.SO_SOMain AS sm ON so.ID = sm.ID
  JOIN dbo.Inventory AS i ON so.cInvCode = i.cInvCode
  JOIN dbo.Dfg_InvclassGroup AS g ON g.cinvccode = i.cInvCCode
  LEFT JOIN dbo.SaleType AS st ON sm.cSTCode = st.cSTCode
  LEFT JOIN dbo.Person AS p ON sm.cPersonCode = p.cPersonCode
  LEFT JOIN dbo.Customer AS c ON sm.cCusCode = c.cCusCode
  LEFT JOIN dbo.CustomerClass AS cc ON cc.cCCCode = c.cCCCode
  LEFT JOIN dbo.Department AS d ON d.cDepCode = sm.cDepCode
  LEFT JOIN ( SELECT  mm.CreateDate ,
                      mm.CreateUser ,
                      mm.MoCode ,
                      mm.CreateTime ,
                      md.SoDId ,
                      md.InvCode ,
                      md.Qty ,
                      ROW_NUMBER() OVER ( PARTITION BY md.SoDId, md.InvCode ORDER BY mm.CreateDate ) AS morn
              FROM    dbo.mom_orderdetail AS md
                      JOIN dbo.mom_order AS mm ON mm.MoId = md.MoId
            ) AS mo ON so.iSOsID = mo.SoDId
                       AND so.cInvCode = mo.InvCode
                       AND mo.morn = 1
  LEFT JOIN dbo.UA_User AS p1 ON mo.CreateUser = p1.cUser_Id
  LEFT JOIN dbo.Dfg_cs_CurrentstockNoBatch AS stk ON stk.cDefine34 = so.cDefine34
                                                     AND stk.cinvcode = so.cInvCode
  LEFT JOIN ( SELECT  CAST(sodid AS INT) AS isodid ,
                      modid ,
                      ROW_NUMBER() OVER ( PARTITION BY sodid ORDER BY modid ) AS mrn
              FROM    dbo.mom_orderdetail AS md 
                      JOIN dbo.SO_SODetails ON CAST(sodid AS INT) = iSOsID
                                               AND SO_SODetails.cInvCode <> md.invcode AND md.RoutingId IS NOT NULL
                                ) AS h ON h.isodid = so.iSOsID
                      AND h.mrn = 1
  LEFT JOIN ( SELECT  *
              FROM    dbo.dfg_fc_MOFinalRouting
              WHERE   rn = 1
            ) d1 ON h.modid = d1.MoDId
  LEFT JOIN ( SELECT  *
              FROM    dbo.dfg_fc_MOFinalRouting
              WHERE   rn = 2
            ) d2 ON h.modid = d2.MoDId
    --same isodid diffrent cexchname will cause error->2 rows 
  LEFT JOIN ( SELECT  CAST(ISNULL(pd.SoDId, pd.cDefine34) AS INT) AS isodid ,
                      MIN(pm.dPODate) AS dpodate ,
                      MAX(pm.cMaker) AS cmaker ,
                      pd.cInvCode ,
                      SUM(pd.iQuantity) AS iquantity,
                             SUM(pd.iMoney) AS imoney
                             --,pm.cexch_name
              FROM    dbo.PO_Pomain AS pm
                      JOIN dbo.PO_Podetails AS pd ON pd.POID = pm.POID
              GROUP BY pd.SoDId ,
                      pd.cDefine34 ,
                      pd.cInvCode
                             --,pm.cexch_name
                             HAVING SUM(pd.iQuantity)>0 
            ) AS po ON po.isodid = so.iSOsID
                       AND po.cInvCode = so.cInvCode
  LEFT JOIN ( SELECT  CAST(pd.SoDId AS INT) AS isodid ,
                      pm.dDate ,
                      pm.cMaker ,
                      pd.cInvCode ,
                      pd.fQuantity ,
                      pd.iOriCost ,
                      pd.cDefine29 ,
                      pd.fUnitPrice ,
                      pd.cexch_name ,
                      ROW_NUMBER() OVER ( PARTITION BY pd.SoDId, pd.cInvCode ORDER BY pm.dDate DESC ) AS rn
              FROM    dbo.PU_AppVouch AS pm
                      JOIN dbo.PU_AppVouchs AS pd ON pd.ID = pm.ID
              WHERE   pd.cbcloser IS NULL
            ) AS pa ON pa.isodid = so.iSOsID
                       AND pa.cInvCode = so.cInvCode
                       AND pa.rn = 1
  JOIN dbo.dfg_invclassCgd AS caigoudi ON i.cInvCCode = caigoudi.cInvCCode
  LEFT JOIN dbo.dfg_co_unitprice_in_def34 AS up ON up.cInvCode = so.cInvCode AND up.cDefine34 = so.cDefine34
WHERE   ISNULL(so.cSCloser,'asuser')='asuser'   --AND so.cDefine31='0000014558001'
ORDER BY sm.dDate ,
  so.cSOCode ,
  so.iRowNo`
})
export class Tyuzan extends BaseEntity{
  @ViewColumn()
  cSoCode: string | null;
  @ViewColumn()
  iRowNo: number | null;
  @ViewColumn()
  cInvCode: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  cInvAddCode: string | null;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  dPreDate: Date | null;
  @ViewColumn()
  mon: number | null;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  rk: number | null;
  @ViewColumn()
  iQuantity: number | null;
  @ViewColumn()
  wrk: number | null;
  @ViewColumn()
  cCusName: string | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  dDate: Date;
  @ViewColumn()
  lt_Dd: number | null;
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  iNatUnitPrice: number | null;
  @ViewColumn()
  iNatMoney: number | null;
  @ViewColumn()
  soiNatMoney: number | null;
  @ViewColumn()
  cMaker: string | null;
  @ViewColumn()
  ctDate: string | null;
  @ViewColumn()
  trDate: string | null;
  @ViewColumn()
  cPsn_Name: string | null;
  @ViewColumn()
  qty: number | null;
  @ViewColumn()
  docdate: Date | null;
  @ViewColumn()
  description: string | null;
  @ViewColumn()
  bcks: number;
  @ViewColumn()
  kcks: number;
  @ViewColumn()
  kps: number;
  @ViewColumn()
  ywy: string | null;
  @ViewColumn()
  wrks: number;
  @ViewColumn()
  cDepCode: string;
  @ViewColumn()
  hlistno: string | null;
  @ViewColumn()
  kcno: string | null;
  @ViewColumn()
  biko: string | null;
  @ViewColumn()
  jukb: string | null;
  @ViewColumn()
  cStName: string | null;
  @ViewColumn()
  cDefine14: string | null;
  @ViewColumn()
  qtydl: number;
  @ViewColumn()
  qtybsc: number;
  @ViewColumn()
  qtykh: number;
  @ViewColumn()
  qtydf: number;
  @ViewColumn()
  qtyzc: number;
  @ViewColumn()
  qtyzr: number;
  @ViewColumn()
  chanshang: string;
  @ViewColumn()
  cCusCode: string | null;
  @ViewColumn()
  cDepName: string | null;
  @ViewColumn()
  grp: number;
  @ViewColumn()
  cDefine25: string | null;
  @ViewColumn()
  changpai: string | null;
  @ViewColumn()
  yuanbicg: number | null;
  @ViewColumn()
  curid: string;
  @ViewColumn()
  wx: number;
  @ViewColumn()
  lo: string;
  @ViewColumn()
  qk: number;
  @ViewColumn()
  cStCode: string;
  @ViewColumn()
  cPersonCode: string | null;
  @ViewColumn()
  cCusAbbName: string | null;
  @ViewColumn()
  cCcName: string | null;
  @ViewColumn()
  dPreMoDate: Date | null;
  @ViewColumn()
  cDefine34: number | null;
  @ViewColumn()
  cexch_Name: string;
  @ViewColumn()
  iOriCost: number | null;
  @ViewColumn()
  fUnitPrice: number | null;
  @ViewColumn()
  fQuantity: number | null;
  @ViewColumn()
  puMoney: number | null;
  @ViewColumn()
  moneydl: number | null;
  @ViewColumn()
  moneybsc: number | null;
  @ViewColumn()
  chengbenjia: number | null;
  @ViewColumn()
  dbclosedate: Date | null;
}
