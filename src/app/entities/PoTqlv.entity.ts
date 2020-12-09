
import {ViewColumn,ViewEntity, BaseEntity} from "typeorm";



@ViewEntity({
	name:'dfg_report_po_tqlv',
	expression:`SELECT   TOP 50000
			YEAR(po.dPODate)  AS '采购日期',          
			 --MONTH(po.dPODate) AS m ,            
			 po.cVenCode AS '供应商编码',
            po.cVenName AS '供应商简称',


			--PdArriveDate,DATEDIFF(DAY,GETDATE(), po.PdArriveDate) , po.iQuantity,po.SAiQuantity,
			--CASE WHEN (DATEDIFF(DAY,GETDATE(), po.PdArriveDate) <0 AND po.iQuantity>po.SAiQuantity)THEN 1 ELSE 0 END
  			SUM(CASE WHEN (DATEDIFF(DAY,requiredate_r, po.PdArriveDate) >0 )THEN 1 ELSE 0 END) AS  '采购拖期' ,
            SUM(1) AS '采购件数',
				 ROUND(CAST(SUM((CASE WHEN (DATEDIFF(DAY,requiredate_r, po.PdArriveDate) >0 )THEN 1 ELSE 0 END)) AS FLOAT) / CAST((SUM(1)) AS FLOAT), 4) AS  '拖期率'

    FROM    dbo.dfg_report_po AS po
     WHERE   
	 
	 --po.iQuantity>ISNULL(po.iArrQTY,0)
	 --AND 
	 
	 --(po.paCloser IS NULL OR po.paCloser='asuser') AND 
	 ISNULL(po.cbCloser,'asuser')='asuser'
	 GROUP BY YEAR(po.dPODate) ,
           --MONTH(po.dPODate),
		   po.cVenCode, po.cVenName

	 ORDER BY YEAR(po.dPODate)
	 --,MONTH(po.dPODate),po.cVenCode`})
export  class PoTqlv extends BaseEntity{

    @ViewColumn()
	'采购日期':number | null;
@ViewColumn()
'供应商编码':string | null;
@ViewColumn()
'供应商简称':string;
@ViewColumn()
'采购拖期':number | null;
@ViewColumn()
'采购件数':number | null;
@ViewColumn()
'拖期率':number | null;
}
