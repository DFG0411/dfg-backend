import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT TOP 100 PERCENT CONVERT(NCHAR(6),pa.dRequirDate,112) AS Period,SUM((pd.iQuantity-ISNULL(pd.iArrQTY,0))*pd.iUnitPrice) AS jpy,SUM((pd.iQuantity-ISNULL(pd.iArrQTY,0))*pd.iNatUnitPrice) AS rmb FROM dbo.PO_Podetails  AS pd JOIN dbo.PO_Pomain AS pm ON pm.POID = pd.POID
	            JOIN dbo.Inventory AS i ON i.cInvCode = pd.cInvCode
            --JOIN dbo.PO_Pomain AS pm ON pm.POID = pd.POID
            JOIN dbo.Vendor AS v ON v.cVenCode = pm.cVenCode
            LEFT JOIN dbo.PU_AppVouchs AS pa ON pa.AutoID = pd.iAppIds
            LEFT JOIN dbo.PU_AppVouch AS pam ON pam.ID = pa.ID

	WHERE pm.cVenCode='gy0170' AND pd.iQuantity-ISNULL(pd.iArrQTY,0)>0 AND pd.cbCloser IS NULL AND  pm.dPODate>'2016-12-31' AND pa.cbcloser IS  NULL
	GROUP BY CONVERT(NCHAR(6),pa.dRequirDate,112)
	ORDER BY CONVERT(NCHAR(6),pa.dRequirDate,112)`,
})
export class DfgReportPoOpenFjsum extends BaseEntity {
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  jpy: number | null;
  @ViewColumn()
  rmb: number | null;
}
