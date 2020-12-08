
import {ViewColumn,ViewEntity, BaseEntity} from "typeorm";



@ViewEntity({name:'dfg_report_po_tqlvz',
	expression:`SELECT   TOP 1000
 --po.ID ,
	--po.cbCloser,
 --           po.cCode  AS '请购单号',
 --           po.cVenCode AS '供应商编码',
	----		po.cPOID AS '采购单号',
 --           po.cVenName AS '供应商简称',
 --           y ,
 --           m ,
 --           po.cInvCode AS '存货编码' ,
	--		--ar.cInvCode,
	--		po.cInvStd AS '规格型号',
 --           po.cInvCCode AS '存货分类',
	--		po.cInvName AS '存货名称',
 --           po.dDate AS '请购日',
 --           po.dPODate AS '采购日',
	--		--arm.dDate AS ardate,
 --           po.requiredate_a AS '请购货期',
 --           po.requiredate_r AS '采购货期',
 --           --DATEDIFF(DAY, '2020-01-15', po.requiredate_r) AS '采购拖期' ,
			YEAR(po.dPODate)  AS '采购日期',
			SUM(CASE WHEN (DATEDIFF(DAY,GETDATE(), po.requiredate_r) <0 AND po.iQuantity>ISNULL(po.iArrQTY,0))THEN 1 ELSE 0 END) AS  '采购拖期' ,
            SUM(1) AS '采购件数',
				 ROUND(CAST(SUM((CASE WHEN ( DATEDIFF(DAY,GETDATE(), po.requiredate_r) <0   AND po.iQuantity>ISNULL(po.iArrQTY,0)) THEN 1 ELSE 0 END)) AS FLOAT) / CAST((SUM(1)) AS FLOAT), 4) AS  '拖期率'

    FROM    dbo.dfg_report_po AS po
     WHERE   
	 
	 --po.iQuantity>ISNULL(po.iArrQTY,0)
	 --AND 
	 
	 --(po.paCloser IS NULL OR po.paCloser='asuser') AND 
	 ISNULL(po.cbCloser,'asuser')='asuser'
	 GROUP BY YEAR(po.dPODate)
	 --,po.cVenCode, po.cVenName
	 --AND po.requiredate_r<GETDATE()+11

	 ORDER BY YEAR(po.dPODate)`})
export  class DfgReportPoTqlvZ extends BaseEntity {

	@ViewColumn()
'采购日期'	:Date|null;
    @ViewColumn()
'采购拖期':number | null;
@ViewColumn()
'采购件数':number | null;
@ViewColumn()
'拖期率':number | null;
}
