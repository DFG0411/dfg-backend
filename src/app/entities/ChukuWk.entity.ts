import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({name:'dfg_report_ChuKuWK',
  expression: `SELECT  s.cCusCode ,
            s.cCusAbbName ,
            s.cSOCode ,
            s.iRowNo ,
            s.rdateKH AS dTVDate ,
--so.finquantity , so.foutquantity ,
            s.cSCloser ,
            s.cInvAddCode ,
            s.cInvCode ,
            s.cInvStd ,
            s.cInvName ,
            s.cInvCCode ,
            s.dDate ,
			YEAR(s.dDate) AS Y,
            s.dPreDate ,
            s.iQuantity ,
            s.QtyKH AS iOQty ,
            s.QtyYK AS iKPQuantity ,
            s.QtyKH AS ckwk ,
            s.iNatUnitPrice ,
            s.iNatUnitPrice * s.QtyKH AS amount ,
            s.cPersonName ,
            s.Hlistno ,
            s.Hlistno AS cdefine14 ,
            s.memo AS cMemo ,
            CASE WHEN ISNULL(s.QtyYK, 0) < s.iQuantity THEN 1
                 ELSE 0
            END AS wk ,
            dr.rdateDL
    FROM    dbo.Dfg_CurrentstockBySo AS s
            LEFT JOIN ( SELECT  isodid ,
                                MAX(dDate) AS rdateDL
                        FROM    dbo.DFG_RUKU
                        GROUP BY isodid
                      ) AS dr ON dr.isodid = s.cDefine34
    WHERE   s.QtyKH > 0
            AND ISNULL(s.QtyYK, 0) < s.iQuantity
            AND s.cSCloser IS  NULL
            AND s.cSTCode <> 10
            AND s.iNatUnitPrice > 0`
})
export class ChukuWk extends BaseEntity{
  @ViewColumn()
  cCusCode: string | null;
  @ViewColumn()
  cCusAbbName: string;
  @ViewColumn()
  cSoCode: string | null;
  @ViewColumn()
  iRowNo: number | null;
  @ViewColumn()
  dTvDate: Date | null;
  @ViewColumn()
  cSCloser: string | null;
  @ViewColumn()
  cInvAddCode: string | null;
  @ViewColumn()
  cInvCode: string | null;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  dDate: Date;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  dPreDate: Date | null;
  @ViewColumn()
  iQuantity: number | null;
  @ViewColumn()
  iOQty: number;
  @ViewColumn()
  iKpQuantity: number;
  @ViewColumn()
  ckwk: number;
  @ViewColumn()
  iNatUnitPrice: number | null;
  @ViewColumn()
  amount: number | null;
  @ViewColumn()
  cPersonName: string | null;
  @ViewColumn()
  hlistno: string | null;
  @ViewColumn()
  cdefine14: string | null;
  @ViewColumn()
  cMemo: string | null;
  @ViewColumn()
  wk: number;
  @ViewColumn()
  rdateDl: Date | null;
}
