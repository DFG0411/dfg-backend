import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  expression: `SELECT  iyear,period=CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END ,(RIGHT(cinvccodeX,1)+'09') AS cinvccodeX ,SUM(inSoPrice) AS CZ FROM dfg_report_product_rcHincd 
				WHERE inSoPrice<>0
				GROUP BY iyear,CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END ,(RIGHT(cinvccodeX,1)+'09')
UNION
SELECT iYear,period=CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END ,'809' AS cinvccodeX ,SUM(qty) AS cz FROM dbo.dfg_toolfeeSJ 
				GROUP BY iyear,CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
union
SELECT iYear,period=CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
,'309' AS cinvccodeX ,sum(qty) AS cz 
FROM dbo.dfg_toolfeeNew WHERE itemcode2='00'
GROUP BY iYear,CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
UNION
SELECT iYear,period=CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
,'509' AS cinvccodeX ,sum(inSoPrice) AS cz 
FROM dfg_report_product_rcHincd 
WHERE inSoPrice<>0
				GROUP BY iyear,CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END
UNION
SELECT iYear,period=CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
,'609' AS cinvccodeX ,sum(inSoPrice) AS cz 
FROM dfg_report_product_rcHincd WHERE inSoPrice<>0
				GROUP BY iyear,CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
union
SELECT iYear,period=CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END 
,'709' AS cinvccodeX ,sum(qty) AS cz 
FROM dbo.dfg_toolfeeNew WHERE itemcode2='00'
GROUP BY iYear,CASE WHEN LEFT(period,4)=2017 THEN '201700'
				WHEN  LEFT(period,4)=2018 THEN '201800'
				ELSE period
				END`,
})
export class DfgReportProductRcHincdAll {
  @ViewColumn()
  iyear: number | null;
  @ViewColumn()
  period: string | null;
  @ViewColumn()
  cinvccodeX: string | null;
  @ViewColumn()
  cz: number | null;
}
