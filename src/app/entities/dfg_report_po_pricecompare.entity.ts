
import {ViewColumn,ViewEntity, BaseEntity} from "typeorm";



@ViewEntity({expression:`SELECT po.ID
      ,[cCode] AS 请购单号
      ,pm.cVenCode AS 供应商编码
      ,pm.cPOID AS 采购单号
      ,[cVenName]  AS 供应商
      --,[y]
      --,[m]
      --,[d]
      ,po.cInvCode  AS 存货编码
      ,[cInvStd]  AS 规格型号
      ,[cInvCCode] AS 存货分类
      ,[cInvName] AS 存货名称
      --,[dDate]  AS 请购日
      ,[dPODate] AS 采购日
      ,ISNULL(pm.cModifyDate,pm.dPODate) AS  最新更新日
      --,[type]
      ,[iQuantity]  AS 订单数
	  ,po.iInvQTY AS 已开数
	  ,po.iUnitPrice AS 订单价原
	  ,po.iNatUnitPrice AS 订单价本
      ,ap.avgoriprice  AS 开均单价原
	  ,ap.avgprice AS 开均单价本
      --,[amount] AS 本币金额
      --,[amountdm]
      --,[iArrQTY]
	  
      ,pm.cMaker AS 采购员
      ,po.cDefine30 AS 请购人
      --,[cDefine24]  AS 最终客户
      ,po.cDefine31 AS 管理号
      ,po.cbCloser  AS 行关闭人
	  --,po.iUnitPrice AS 订单原币单价
	  ,pm.cexch_name AS 订单币种
	  
  FROM [dbo].PO_Podetails AS po
  JOIN dbo.PO_Pomain AS pm ON pm.POID = po.POID
  JOIN dbo.Vendor AS v ON v.cVenCode = pm.cVenCode
  JOIN dbo.Inventory AS i ON i.cInvCode = po.cInvCode
  JOIN dbo.PU_AppVouchs AS pa  ON po.iAppIds=pa.AutoID
  JOIN dbo.PU_AppVouch AS pam ON pam.ID = pa.ID
  LEFT JOIN dfg_pb_avgpricce AS ap ON ap.cinvcode=po.cInvCode AND pm.cVenCode=ap.cvencode AND pm.cexch_name=ap.cexch_name
  WHERE ISNULL(po.cbCloser,'asuser')='asuser'
  and YEAR(GETDATE())-YEAR(pm.dPODate)<3`})
export  class DfgReportPoPricecompare extends BaseEntity{

@ViewColumn()
id:number;
@ViewColumn()
'请购单号':string;
@ViewColumn()
'供应商编码':string | null;
@ViewColumn()
'采购单号':string | null;
@ViewColumn()
'供应商':string | null;
@ViewColumn()
'存货编码':string;
@ViewColumn()
'规格型号':string | null;
@ViewColumn()
'存货分类':string | null;
@ViewColumn()
'存货名称':string | null;
@ViewColumn()
'采购日':Date;
@ViewColumn()
'最新更新日':Date;
@ViewColumn()
'订单数':number | null;
@ViewColumn()
'已开数':number | null;
@ViewColumn()
'订单价原':number | null;
@ViewColumn()
'订单价本':number | null;
@ViewColumn()
'开均单价原':number | null;
@ViewColumn()
'开均单价本':number | null;
@ViewColumn()
'采购员':string | null;
@ViewColumn()
'请购人':string | null;
@ViewColumn()
'管理号':string | null;
@ViewColumn()
'行关闭人':string | null;
@ViewColumn()
'订单币种':string | null;
}
