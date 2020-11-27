import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  pb.ID ,
        pbm.cPBVCode ,
        pbm.cVenCode ,
        pb.PBVID ,
        v.cVenAbbName AS cvenname ,
        YEAR(pbm.dPBVDate) AS y ,
        MONTH(pbm.dPBVDate) AS m ,
        DAY(pbm.dPBVDate) AS d ,
        pbm.dPBVDate ,
        pb.cInvCode ,
        i.cInvStd ,
        i.cInvCCode ,
        i.cInvName ,
        CASE WHEN LEFT(i.cInvCCode,3)='301' THEN '外协'
             WHEN pb.cInvCode = sd.cInvCode THEN '转卖'
             WHEN LEFT(i.cInvCCode, 1) = '1' THEN '材料'
             WHEN ISNULL(pb.cDefine34, 0) <> 0 THEN '部件'
             ELSE '自用'
        END AS [type] ,
		pb.iPBVQuantity,
        pb.imoney/10000 AS imoney ,
        v.cVCCode ,
        CASE WHEN ISNULL(pbm.cexch_name, '人民币') = '人民币' THEN '国内'
             ELSE '国外'
        END AS nw ,
        CASE WHEN pbm.cVenCode IN ( 'GY0170', 'gy0176', 'gy0174', 'gy0255', 'gy0294', 'gy0192','GY0001','GY0037','GY0295' ) THEN v.cVenAbbName
             WHEN pbm.cVenCode IN( 'gy0092','GY0372') THEN 'OSG,东芝,米思米'
			 WHEN pbm.cVenCode='gy4013'THEN '超硬(苏州)'
			 WHEN pbm.cVenCode='GY0038' THEN '超硬(IMC)'
			 WHEN pbm.cVenCode ='GY4088' THEN '长野超硬'
			 WHEN LEFT(i.cInvCCode,3)='301' THEN '外协'
			 WHEN ISNULL(pbm.cexch_name, '人民币') <> '人民币' THEN '国外其他'
			 WHEN pb.cInvCode = sd.cInvCode THEN '其他转卖'
             ELSE '其他自用'

        END AS category
FROM    dbo.PurBillVouchs AS pb
        JOIN dbo.PurBillVouch AS pbm ON pbm.PBVID = pb.PBVID
        JOIN dbo.Vendor AS v ON v.cVenCode = pbm.cVenCode
        JOIN dbo.Inventory AS i ON i.cInvCode = pb.cInvCode
        LEFT JOIN dbo.SO_SODetails AS sd ON sd.cDefine34 = pb.cDefine34
                                                --AND sd.cInvCode = pd.cInvCode
WHERE 1=1
AND LEFT(i.cInvCCode,1)<>'Z' 
AND pbm.dPBVDate>='2017-1-1'
--AND DATEDIFF(MONTH,pbm.dPBVDate,GETDATE())<3`,
})
export class DfgReportPoBv {
  @ViewColumn()
  id: number;
  @ViewColumn()
  cPbvCode: string | null;
  @ViewColumn()
  cVenCode: string | null;
  @ViewColumn()
  pbvid: number;
  @ViewColumn()
  cvenname: string;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  m: number | null;
  @ViewColumn()
  d: number | null;
  @ViewColumn()
  dPbvDate: Date;
  @ViewColumn()
  cInvCode: string;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  type: string;
  @ViewColumn()
  iPbvQuantity: number | null;
  @ViewColumn()
  imoney: number | null;
  @ViewColumn()
  cVcCode: string | null;
  @ViewColumn()
  nw: string;
  @ViewColumn()
  category: string;
}
