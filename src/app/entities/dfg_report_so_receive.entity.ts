import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  
	cp.cVouchType,
            cp.dVouchDate ,
			CAST(YEAR(cp.dVouchDate ) AS NVARCHAR(4)) + RIGHT('00'
                                               + CAST(MONTH(cp.dVouchDate ) AS NVARCHAR(2)),
                                               2) AS period 
											   			,		CASE WHEN DATEDIFF(ww,GETDATE(),cp.dVouchDate)<=-6 THEN -6
		     WHEN DATEDIFF(ww,GETDATE(),cp.dVouchDate)>=6 THEN 6
			 ELSE DATEDIFF(ww,GETDATE(),cp.dVouchDate)
			 END AS lt_dd ,
			YEAR(cp.dVouchDate ) AS y,
			MONTH(cp.dVouchDate ) AS m,
			CASE WHEN ISNULL(cp.cexch_name,'人民币')='人民币' THEN '国内' 
			ELSE '国外' END AS nw,
cp.cOrderNo, cp.cDwCode ,d.cDepName,
           c.cCusAbbName,

            cps.iAmt AS iAmt

    FROM    dbo.Ap_CloseBill  --收付款单子表
	AS cp
            JOIN dbo.Ap_CloseBills AS cps ON cps.iID = cp.iID
            LEFT JOIN dbo.ap_vouchtype AS vt ON vt.ctypecode = cp.cVouchType
            LEFT JOIN dbo.Department AS d ON cp.cDeptCode = d.cDepCode
			JOIN dbo.Customer c ON c.cCusCode=cp.cDwCode
WHERE dVouchDate>'2017-12-31'
AND cp.cVouchType='48'  --收款单
--ORDER BY (CAST(YEAR(cp.dVouchDate ) AS NVARCHAR(4)) + RIGHT('00'
--                                               + CAST(MONTH(cp.dVouchDate ) AS NVARCHAR(2)),
--                                               2))`,
})
export class DfgReportSoReceive {
  @ViewColumn()
  cVouchType: string;
  @ViewColumn()
  dVouchDate: Date;
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  ltDd: number | null;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  m: number | null;
  @ViewColumn()
  nw: string;
  @ViewColumn()
  cOrderNo: string | null;
  @ViewColumn()
  cDwCode: string;
  @ViewColumn()
  cDepName: string | null;
  @ViewColumn()
  cCusAbbName: string;
  @ViewColumn()
  iAmt: number;
}
