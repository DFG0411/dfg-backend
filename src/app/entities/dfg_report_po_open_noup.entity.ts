
import {ViewColumn,ViewEntity} from "typeorm";



@ViewEntity({expression:`SELECT  
			LEFT(pinvccode,6) AS 产品品种,
            y ,
            m ,
			po.cDefine31 AS '管理号',
			ccusabbname AS 客户,
			pinvcode AS '产品编码',
			pinvstd AS '产品规格',
			pinvaddcode AS '产品代码',
            po.cCode  AS '请购单号',

            po.cVenCode AS '供应商编码',
			po.cPOID AS '采购单号',
            po.cVenName AS '供应商简称',
            po.cInvCode AS '存货编码' ,
			--ar.cInvCode,
			po.cInvStd AS '存货编码',
            po.cInvCCode AS '存货分类',
			po.cInvName AS '存货名称',
			po.iQuantity AS 采购数量,
			po.iQuantity-ISNULL(po.iArrQTY,0) AS 未到数量,
            po.dDate AS '请购日',
            po.dPODate AS '采购日',
			--arm.dDate AS ardate,
            po.requiredate_a AS '请购货期',
            po.requiredate_r AS '采购货期',
            DATEDIFF(WEEK, GETDATE(), po.requiredate_r) AS '采购拖期' ,
            DATEDIFF(WEEK, GETDATE(), po.dPreDate) AS '销售拖期' ,
			[type] AS '类型',
			iNatMoney AS '销售金额',
			(po.iQuantity-ISNULL(po.iArrQTY,0))*sounitprice AS 未到销售金额,
			po.cMaker AS 采购员,
			po.cDefine30 AS 请购人,
			ISNULL(cModifyDate,po.dPODate) AS 最近更新日,
			po.cDefine24 AS 最终客户,

			po.dPreDate AS 销售货期,
			po.cDefine37 AS 回答货期,
			GETDATE() AS 更新日,
			po.ID 
	--po.cbCloser,			
    FROM    dbo.dfg_report_po AS po
     WHERE   po.iQuantity>ISNULL(po.iArrQTY,0)
	 AND po.paCloser IS NULL
	 AND po.cbCloser IS NULL
	 --AND po.requiredate_r<GETDATE()+11`})
export  class DfgReportPoOpenNoup {

@ViewColumn()
'产品品种':string | null;
@ViewColumn()
y:number | null;
@ViewColumn()
m:number | null;
@ViewColumn()
'管理号':string | null;
@ViewColumn()
'客户':string | null;
@ViewColumn()
'产品编码':string;
@ViewColumn()
'产品规格':string | null;
@ViewColumn()
'产品代码':string | null;
@ViewColumn()
'请购单号':string | null;
@ViewColumn()
'供应商编码':string | null;
@ViewColumn()
'采购单号':string | null;
@ViewColumn()
'供应商简称':string;
@ViewColumn()
'存货编码':string;
@ViewColumn()
'规格型号 ':string | null;
@ViewColumn()
'存货分类':string | null;
@ViewColumn()
'存货名称':string | null;
@ViewColumn()
'采购数量':number | null;
@ViewColumn()
'未到数量':number | null;
@ViewColumn()
'请购日':Date | null;
@ViewColumn()
'采购日':Date;
@ViewColumn()
'请购货期':Date | null;
@ViewColumn()
'采购货期':Date | null;
@ViewColumn()
'采购拖期':number | null;
@ViewColumn()
'销售拖期':number | null;
@ViewColumn()
'类型':string;
@ViewColumn()
'销售金额':number | null;
@ViewColumn()
'未到销售金额':number | null;
@ViewColumn()
'采购员':string | null;
@ViewColumn()
'请购人':string | null;
@ViewColumn()
'最近更新日':Date;
@ViewColumn()
'最终客户':string | null;
@ViewColumn()
'销售货期':Date | null;
@ViewColumn()
'回答货期':Date | null;
@ViewColumn()
'更新日':Date;
@ViewColumn()
id:number;
}
