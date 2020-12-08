import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  CAST(iYear AS NVARCHAR(4)) + RIGHT('00'
                                               + CAST(iMonth AS NVARCHAR(2)),
                                               2) AS period ,
            dvoudate ,
            ia.dkeepdate ,
            AA_Enum.EnumName ,
            cvoucode ,
            cwhName ,
            ia.cInvCode ,
            i.cInvName ,
            i.cInvStd ,
            i.cinvccode ,
            cinvccodeX ,
            cRdName ,
            CAST(ISNULL(iAInPrice, 0) AS FLOAT) AS inPrice ,
            CAST(ISNULL(iAInQuantity, 0) AS FLOAT) AS inQuantity ,
            CAST(ISNULL(iAOutPrice, 0) AS FLOAT) AS OutPrice ,
            CAST(ISNULL(iAOutQuantity, 0) AS FLOAT) AS outQuantity ,
            cpzid ,
            ia.autoid ,
            cvoutype ,
            ipzid ,
            sd.iNatUnitPrice AS insounitprice ,
            sb.iNatUnitPrice ,
            CAST(ISNULL(iAInQuantity, 0) AS FLOAT) * ISNULL(sd.iNatUnitPrice,
                                                            0) AS inSoPrice ,
            CAST(ISNULL(iAOutQuantity, 0) AS FLOAT) * ISNULL(sb.iNatUnitPrice,
                                                             0) AS outSoPrice ,
            sb.cDefine31 AS ocdefine31 ,
            sd.cDefine31 AS icdefine31 ,
			c.cCusAbbName,
            ia.ID,
			co.cCusAbbName AS sbCusAbbName,
			ia.cDefine34
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
    WHERE   cInvhead = N'140501'
            AND cPzid IS NOT NULL
     --       AND ( ( cVouType = '10' AND ia.cRdCode = '12')
     --             OR ( cVouType = '09' AND ia.cRdCode = '23')
     --             OR ( cVouType = '32' AND ia.cRdCode = '23')
     --             OR ( cVouType = '20' AND ia.cRdCode = '12')
     --             OR ( cVouType = '08' AND ia.cRdCode = '19')
					----or (cVouType='09' AND ia.cRdCode='29')
     --             OR ( cVouType = '21' AND ia.cRdCode = '23')
					----OR (cVouType='24' AND ia.cRdCode='18')
     --           )
		--        AND imonth = 1
		--        AND iYear = 2017

		AND ia.cVouType<>'33'
		AND DATEDIFF(MONTH,ia.dKeepDate,GETDATE())<13`,
})
export class DfgReportProductRc extends BaseEntity{
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  dvoudate: Date | null;
  @ViewColumn()
  dkeepdate: Date | null;
  @ViewColumn()
  enumName: string | null;
  @ViewColumn()
  cvoucode: string | null;
  @ViewColumn()
  cwhName: string | null;
  @ViewColumn()
  cInvCode: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  cinvccode: string | null;
  @ViewColumn()
  cinvccodeX: string | null;
  @ViewColumn()
  cRdName: string | null;
  @ViewColumn()
  inPrice: number | null;
  @ViewColumn()
  inQuantity: number | null;
  @ViewColumn()
  outPrice: number | null;
  @ViewColumn()
  outQuantity: number | null;
  @ViewColumn()
  cpzid: string | null;
  @ViewColumn()
  autoid: number;
  @ViewColumn()
  cvoutype: string | null;
  @ViewColumn()
  ipzid: number | null;
  @ViewColumn()
  insounitprice: number | null;
  @ViewColumn()
  iNatUnitPrice: number | null;
  @ViewColumn()
  inSoPrice: number | null;
  @ViewColumn()
  outSoPrice: number | null;
  @ViewColumn()
  ocdefine31: string | null;
  @ViewColumn()
  icdefine31: string | null;
  @ViewColumn()
  cCusAbbName: string | null;
  @ViewColumn()
  id: number | null;
  @ViewColumn()
  sbCusAbbName: string | null;
  @ViewColumn()
  cDefine34: number | null;
}
