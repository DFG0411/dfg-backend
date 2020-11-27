import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
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
        END AS chan`,
})
export class DfgReportTyuzan {
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
  ltDd: number | null;
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
  cPsnName: string | null;
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
  cexchName: string;
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
