
import {ViewColumn,ViewEntity, BaseEntity} from "typeorm";



@ViewEntity({expression:`SELECT   YEAR(sm.dDate) AS Y,
	MONTH(sm.dDate) AS M,   
            Grp AS 品种,
            --CONVERT(DATE,sm.dDate,112) AS dDate,--订单日
			CONVERT(DATE,sm.dDate,112) AS OrdersdDate,
            CONVERT(DATE,sd.dPreMoDate,112) AS dPreMoDate ,--预定完工日
            CONVERT(DATE,sd.dPreDate,112) AS dPreDate ,--预定发货日
			sd.cinvcode ,
			cinvaddcode,
            sd.iQuantity ,
            iNatUnitPrice ,--单价
            sd.iQuantity*iNatUnitPrice AS JinE,		
			cSCloser,   
            ISNULL(sd.cDefine25,'补充') AS pjf ,
            CONVERT(NVARCHAR(6), sm.dDate, 112) AS period ,
            i.cInvName ,
            i.cInvStd ,
            i.cInvCCode ,
            CASE RIGHT(g.cinvccodeX,3) WHEN '001' THEN '机夹刀'
			WHEN '002' THEN '刀具'
			ELSE '刀柄' END AS hinshu ,
            sd.iNatUnitPrice AS sounitprice ,
            c.cCusAbbName ,
            CASE WHEN LEFT(i.cInvCCode, 3) IN ( '302', '305' )
                      AND i.bPurchase = 1 THEN '商'
                 WHEN LEFT(i.cInvCCode, 1) IN ( '3', '4' ) THEN '产'
                 WHEN LEFT(i.cInvCCode, 1) IN ( '1', '2' )
                      AND i.bPurchase = 1 THEN '商'
                 WHEN i.cInvCode = '6001' THEN '产'
                 WHEN i.cInvCode = '6002' THEN '商'
                 ELSE '它'
            END AS cs ,
			c.cCusDepart,
			DATEDIFF(DAY,sm.dDate,sd.dPreDate) AS lt_plan

 FROM    
	dbo.SO_SODetails AS sd
        JOIN dbo.SO_SOMain AS sm ON sd.ID = sm.ID
        JOIN dbo.Inventory AS i ON sd.cInvCode = i.cInvCode
        --JOIN dbo.Dfg_InvclassGroup AS g ON g.cinvccode = i.cInvCCode
		LEFT JOIN dbo.Dfg_co_Group AS g ON i.cInvCCode = g.cinvccode
        LEFT JOIN dbo.SaleType AS st ON sm.cSTCode = st.cSTCode
        LEFT JOIN dbo.Person AS p ON sm.cPersonCode = p.cPersonCode
        LEFT JOIN dbo.Customer AS c ON sm.cCusCode = c.cCusCode
        LEFT JOIN dbo.CustomerClass AS cc ON cc.cCCCode = c.cCCCode
        LEFT JOIN dbo.Department AS d ON d.cDepCode = sm.cDepCode
        --LEFT JOIN dbo.UA_User AS p1 ON mo.CreateUser = p1.cUser_Id
        LEFT JOIN dbo.Dfg_cs_CurrentstockNoBatch AS stk ON stk.cDefine34 = sd.cDefine34
                                                           AND stk.cinvcode = sd.cInvCode
 
		----same isodid diffrent cexchname will cause error->2 rows 
         LEFT JOIN dbo.dfg_co_unitprice_in_def34 AS up ON up.cInvCode = sd.cInvCode AND up.cDefine34 = sd.cDefine34
    WHERE 1=1  
	AND (sd.dbclosedate IS NULL OR sd.cSCloser='asuser')
	----GROUP BY c.cCusAbbName

	----ORDER BY ddate DESC,sd.iQuantity*iNatUnitPrice DESC`})
export  class DfgReportOrders extends BaseEntity {

    @ViewColumn()
y:number | null;
@ViewColumn()
m:number | null;
@ViewColumn()
'品种':number | null;
@ViewColumn()
ordersdDate:Date | null;
@ViewColumn()
dPreMoDate:Date | null;
@ViewColumn()
dPreDate:Date | null;
@ViewColumn()
cinvcode:string | null;
@ViewColumn()
cinvaddcode:string | null;
@ViewColumn()
iQuantity:number | null;
@ViewColumn()
iNatUnitPrice:number | null;
@ViewColumn()
jinE:number | null;
@ViewColumn()
cSCloser:string | null;
@ViewColumn()
pjf:string;
@ViewColumn()
period:string | null;
@ViewColumn()
cInvName:string | null;
@ViewColumn()
cInvStd:string | null;
@ViewColumn()
cInvCCode:string | null;
@ViewColumn()
hinshu:string;
@ViewColumn()
sounitprice:number | null;
@ViewColumn()
cCusAbbName:string | null;
@ViewColumn()
cs:string;
@ViewColumn()
cCusDepart:string | null;
@ViewColumn()
lt_Plan:number | null;
}
