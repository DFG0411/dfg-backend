
import {ViewColumn,ViewEntity, BaseEntity} from "typeorm";



@ViewEntity({expression:`SELECT  po.ID ,
	po.cbCloser,
            po.cCode  AS '请购单号',
            po.cVenCode AS '供应商编码',
			po.cPOID AS '采购单号',
            po.cVenName AS '供应商简称',
            y ,
            m ,
            po.cInvCode AS '存货编码' ,
			--ar.cInvCode,
			po.cInvStd AS '规格型号',
            po.cInvCCode AS '存货分类',
			po.cInvName AS '存货名称',
            po.dDate AS '请购日',
            po.dPODate AS '采购日',
			--arm.dDate AS ardate,
            po.requiredate_a AS '请购货期',
            po.requiredate_r AS '采购货期',
            DATEDIFF(WEEK, GETDATE(), po.requiredate_r) AS '采购拖期' ,
            DATEDIFF(WEEK, GETDATE(), po.dPreDate) AS '销售拖期' ,
			[type] AS '类型',
            po.amount AS '采购金额',
			iNatMoney AS '销售金额',
			(po.iQuantity-ISNULL(po.iArrQTY,0))*inatunitprice AS 未到采购金额,
			(po.iQuantity-ISNULL(po.iArrQTY,0))*sounitprice AS 未到销售金额,
			po.iQuantity-ISNULL(po.iArrQTY,0) AS 未到数量,
			po.cMaker AS 采购员,
			po.cDefine30 AS 请购人,
			ISNULL(cModifyDate,po.dPODate) AS 最近更新日,
			po.cDefine24 AS 最终客户,
			ccusabbname AS 客户,
			po.cDefine31 AS 管理号,
			po.dPreDate AS 销售货期,
			po.iQuantity AS 采购数量,
			po.cDefine37 AS 回答货期,
			GETDATE() AS tday,
			pinvccode AS 产品品种
    FROM    dbo.dfg_report_po AS po
     WHERE   po.iQuantity>ISNULL(po.iArrQTY,0)
	 AND po.paCloser IS NULL
	 AND po.cbCloser IS NULL
	 --AND po.requiredate_r<GETDATE()+11`})
export  class DfgReportPoOpen extends BaseEntity{

    @ViewColumn()
id:number;
@ViewColumn()
cbCloser:string | null;
@ViewColumn()
'请购单号' :string | null;
@ViewColumn()
'供应商编码':string | null;
@ViewColumn()
'采购单号':string | null;
@ViewColumn()
'供应商简称':string;
@ViewColumn()
y:number | null;
@ViewColumn()
m:number | null;
@ViewColumn()
'存货编码' :string;
@ViewColumn()
'规格型号':string | null;
@ViewColumn()
'存货分类':string | null;
@ViewColumn()
'存货名称':string | null;
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
'采购金额':number | null;
@ViewColumn()
'销售金额':number | null;
@ViewColumn()
'未到采购金额':number | null;
@ViewColumn()
'未到销售金额':number | null;
@ViewColumn()
'未到数量':number | null;
@ViewColumn()
'采购员':string | null;
@ViewColumn()
'请购人':string | null;
@ViewColumn()
'最近更新日':Date;
@ViewColumn()
'最终客户':string | null;
@ViewColumn()
'客户':string | null;
@ViewColumn()
'管理号':string | null;
@ViewColumn()
'销售货期':Date | null;
@ViewColumn()
'采购数量':number | null;
@ViewColumn()
'回答货期':Date | null;
@ViewColumn()
tday:Date;
@ViewColumn()
'产品品种':string | null;
}
