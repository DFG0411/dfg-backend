import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  iyear,CAST(iYear AS NVARCHAR(4)) + RIGHT('00'
                                               + CAST(iMonth AS NVARCHAR(2)),
                                               2) AS period ,
            cinvccodeX ,
            --CAST(ISNULL(iAInPrice, 0) AS FLOAT) AS inPrice ,
            SUM((ISNULL(iAInQuantity, 0) )) AS inQuantity ,
            --CAST(ISNULL(iAOutPrice, 0) AS FLOAT) AS OutPrice ,
            SUM(ISNULL(iAOutQuantity, 0)) AS outQuantity ,
            --cvoutype ,
            --sd.iNatUnitPrice AS insounitprice ,
            --sb.iNatUnitPrice ,
            SUM(CAST(ISNULL(iAInQuantity, 0) AS FLOAT) * ISNULL(sd.iNatUnitPrice,
                                                            0)) AS inSoPrice ,
            SUM(CAST(ISNULL(iAOutQuantity, 0) AS FLOAT) * ISNULL(sb.iNatUnitPrice,
                                                             0)) AS outSoPrice 
    FROM    IA_Subsidiary AS ia
            LEFT JOIN Warehouse ON ia.cWhCode = Warehouse.cWhCode
            LEFT JOIN Inventory AS i ON ia.cInvCode = i.cInvCode
            LEFT JOIN dfg_co_group AS g ON i.cInvCCode = g.cinvccode
            LEFT JOIN VouchType ON CASE WHEN LEFT(ia.cVouType, 2) IN ( N'Ex',
                                                              N'Im' )
                                        THEN ia.cVouType
                                        ELSE LEFT(ia.cVouType, 2)
                                   END = VouchType.cVouchType
            LEFT JOIN Rd_Style ON ia.cRdCode = Rd_Style.cRdCode
            LEFT JOIN AA_Enum ON AA_Enum.EnumCode = cVouchName
                                 AND AA_Enum.EnumType = 'IA.VchType'
                                 AND AA_Enum.localeID = 'zh-CN'
            LEFT JOIN dbo.SO_SODetails AS sd ON  sd.cDefine34 = ia.cDefine34 AND sd.cInvCode = ia.cInvCode
			LEFT JOIN dbo.SO_SOMain AS sm ON sm.id=sd.ID 
			LEFT JOIN dbo.Customer AS c ON c.cCusCode = sm.cCusCode 
            LEFT JOIN dbo.SaleBillVouchs AS sb ON sb.iDLsID = ia.idlsid
			LEFT JOIN dbo.SalebillVouch AS sbm ON sbm.SBVID = sb.SBVID
            LEFT JOIN dbo.Customer AS co ON co.cCusCode = sbm.cCusCode
			--JOIN Dfg_InvclassGroup grp ON i.cInvCCode=grp.cinvccode
    WHERE   cInvhead = N'140501'
            AND cPzid IS NOT NULL
		AND ia.cVouType<>'33'
		--AND DATEDIFF(MONTH,ia.dKeepDate,GETDATE())<13
		AND ia.dKeepDate>'2016-12-31'
		GROUP BY ia.iYear,CAST(iYear AS NVARCHAR(4)) + RIGHT('00'
                                               + CAST(iMonth AS NVARCHAR(2)),
                                               2) 
           , cinvccodeX`,
})
export class DfgReportProductRcHincd {
  @ViewColumn()
  iyear: number | null;
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  cinvccodeX: string | null;
  @ViewColumn()
  inQuantity: number | null;
  @ViewColumn()
  outQuantity: number | null;
  @ViewColumn()
  inSoPrice: number | null;
  @ViewColumn()
  outSoPrice: number | null;
}
