import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  vt.ctypename ,
            cp.dVouchDate ,
			YEAR(cp.dVouchDate ) AS y,
			MONTH(cp.dVouchDate ) AS m,
			CASE WHEN ISNULL(cp.cexch_name,'人民币')='人民币' THEN '国内' 
			ELSE '国外' END AS nw,
cp.cOrderNo,
            cp.cDwCode ,
			--c.cCusAbbName,
d.cDepName,
            v.cVenAbbName ,
            cps.iAmt/10000 AS iAmt
 --,* 
    FROM    dbo.Ap_CloseBill  --收付款单子表
	AS cp
            JOIN dbo.Ap_CloseBills AS cps ON cps.iID = cp.iID
            LEFT JOIN dbo.ap_vouchtype AS vt ON vt.ctypecode = cp.cVouchType
            LEFT JOIN dbo.Department AS d ON cp.cDeptCode = d.cDepCode
			--JOIN dbo.Customer c ON c.cCusCode=cp.cDwCode
            JOIN dbo.Vendor AS v ON cp.cDwCode = v.cVenCode
WHERE dVouchDate>'2017-12-31'
--AND ctypename='收款单'
--AND YEAR(cp.dVouchDate)=2019 AND MONTH(cp.dVouchDate)=3`,
})
export class DfgReportPoPay extends BaseEntity{
  @ViewColumn()
  ctypename: string | null;
  @ViewColumn()
  dVouchDate: Date;
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
  cVenAbbName: string;
  @ViewColumn()
  iAmt: number | null;
}
