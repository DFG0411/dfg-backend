import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  pd.ID ,
            pam.cCode ,
            pm.cVenCode ,
			pm.cPOID,
            v.cVenAbbName AS cVenName ,
            YEAR(pm.dPODate) AS y ,
            MONTH(pm.dPODate) AS m ,
			DAY(pm.dPODate) AS d ,
            pd.cInvCode ,
			i.cInvStd,
            i.cInvCCode ,
			i.cInvName,
            pam.dDate ,
            pm.dPODate ,
			pm.cModifyDate,
            pa.dRequirDate AS requiredate_a ,
            pd.dArriveDate AS requiredate_r ,
            DATEDIFF(DAY, pam.dDate, pm.dPODate) AS lt_dd ,
            DATEDIFF(DAY, pam.dDate, pa.dRequirDate) AS lt_plan ,
            CASE WHEN LEFT(i.cInvCCode,3)='301' THEN '外协'
                 WHEN  pd.cInvCode = sd.cInvCode THEN '转卖'
                 WHEN LEFT(i.cInvCCode, 1) = '1' THEN '材料'
                 WHEN ISNULL(pd.cDefine34, 0) <> 0 OR LEFT(i.cInvCCode,3)='206' THEN '部件'
                 ELSE '自用'
            END AS [type] ,
            pd.iNatMoney AS amount,
			pd.iNatMoney/10000 AS amountdm,
			pd.iQuantity,
			pd.iArrQTY,
			pd.iNatUnitPrice,
			pm.cMaker,
			pd.cDefine30,
			sd.cDefine24,
			c.cCusAbbName,
			sd.cDefine31,
			sd.iNatMoney,
			sd.iNatUnitPrice AS sounitprice,
			sd.dPreDate,
			pd.cDefine37,
			CASE WHEN v.cVCCode='6' THEN '外' ELSE '内' END AS NW,
			pd.cbCloser,
			pa.cbcloser AS pacloser
			,ISNULL(SAiQuantity,0) AS SAiQuantity ,ISNULL(PdArriveDate,GETDATE()) AS PdArriveDate
    FROM    dbo.PO_Podetails AS pd
            JOIN dbo.Inventory AS i ON i.cInvCode = pd.cInvCode
            JOIN dbo.PO_Pomain AS pm ON pm.POID = pd.POID
            JOIN dbo.Vendor AS v ON v.cVenCode = pm.cVenCode
            LEFT JOIN dbo.PU_AppVouchs AS pa ON pa.AutoID = pd.iAppIds
            LEFT JOIN dbo.PU_AppVouch AS pam ON pam.ID = pa.ID
            LEFT JOIN dbo.SO_SODetails AS sd ON sd.cDefine34 = pd.cDefine34
                                                --AND sd.cInvCode = pd.cInvCode
			LEFT JOIN dbo.SO_SOMain AS sm ON sm.ID = sd.ID
			LEFT JOIN dbo.Customer AS c ON c.cCusCode = sm.cCusCode

			LEFT JOIN (SELECT pa.iPOsID,SUM(iQuantity) AS SAiQuantity,MAX(pm.dDate) AS PdArriveDate FROM dbo.PU_ArrivalVouchs pa
			JOIN dbo.PU_ArrivalVouch pm ON pm.id = pa.id
			 GROUP BY  pa.iPOsID )pas ON pd.ID = pas.iPOsID 

    WHERE   ISNULL(pd.cbCloser,'asuser')='asuser'
	--AND pm.cVerifier IS NOT NULL
	AND DATEDIFF( MONTH,pm.dPODate,GETDATE())<=24
	--AND YEAR(pm.dPODate)=2019 AND MONTH(pm.dPODate)=3`,
})
export class DfgReportPo_24m {
  @ViewColumn()
  id: number;
  @ViewColumn()
  cCode: string | null;
  @ViewColumn()
  cVenCode: string | null;
  @ViewColumn()
  cPoid: string | null;
  @ViewColumn()
  cVenName: string;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  m: number | null;
  @ViewColumn()
  d: number | null;
  @ViewColumn()
  cInvCode: string;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  dDate: Date | null;
  @ViewColumn()
  dPoDate: Date;
  @ViewColumn()
  cModifyDate: Date | null;
  @ViewColumn()
  requiredateA: Date | null;
  @ViewColumn()
  requiredateR: Date | null;
  @ViewColumn()
  ltDd: number | null;
  @ViewColumn()
  ltPlan: number | null;
  @ViewColumn()
  type: string;
  @ViewColumn()
  amount: number | null;
  @ViewColumn()
  amountdm: number | null;
  @ViewColumn()
  iQuantity: number | null;
  @ViewColumn()
  iArrQty: number | null;
  @ViewColumn()
  iNatUnitPrice: number | null;
  @ViewColumn()
  cMaker: string | null;
  @ViewColumn()
  cDefine30: string | null;
  @ViewColumn()
  cDefine24: string | null;
  @ViewColumn()
  cCusAbbName: string | null;
  @ViewColumn()
  cDefine31: string | null;
  @ViewColumn()
  iNatMoney: number | null;
  @ViewColumn()
  sounitprice: number | null;
  @ViewColumn()
  dPreDate: Date | null;
  @ViewColumn()
  cDefine37: Date | null;
  @ViewColumn()
  nw: string;
  @ViewColumn()
  cbCloser: string | null;
  @ViewColumn()
  pacloser: string | null;
  @ViewColumn()
  sAiQuantity: number;
  @ViewColumn()
  pdArriveDate: Date;
}
