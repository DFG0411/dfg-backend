import { ViewColumn, ViewEntity, BaseEntity } from "typeorm";

@ViewEntity({name:'Dfg_report_BySoKuCun',
  expression: `SELECT  sm.cCusCode ,
        c.cCusName ,
		c.cCusAbbName,
        sm.cPersonCode ,
        p.cPersonName ,
		d.cDepName ,
        d.cDepCode,
        sd.cSOCode ,
        sd.iRowNo ,
        i.cInvCCode ,
        g.cinvcname ,
        sd.cInvCode ,
        i.cInvName ,
        i.cInvStd ,
        i.cInvAddCode ,
        CASE WHEN LEFT(i.cInvCCode, 3) = '301' THEN '产'
             WHEN LEFT(i.cInvCCode, 3) = '302' THEN '商'
             WHEN LEFT(i.cInvCCode, 3) = '303' THEN '产'
             WHEN LEFT(i.cInvCCode, 3) = '304' THEN '产'
			 WHEN LEFT(i.cInvCCode, 3) = '305' THEN '商'
             WHEN LEFT(i.cInvCCode, 1) = '2' THEN '商'
             WHEN LEFT(i.cInvCCode, 1) = '4' THEN '产'
             ELSE '它'
        END AS cs ,
        g.grp ,
        CASE WHEN c.cCCCode = '90' THEN '外'
             ELSE '内'
        END AS lo ,
        sd.iNatUnitPrice ,
        sd.iQuantity ,
        '2001' AS cWhCodeDL ,
        st2001.cbatch AS cbatchDL ,
        st2001.rdate AS rdateDL ,
        ISNULL(st2001.qty,0) AS QtyDL ,
        ISNULL(st2001.qty,0) * sd.iNatUnitPrice AS AmntDl ,
		ISNULL(st300X.qty,0)* sd.iNatUnitPrice AS AmntBSC,
		ISNULL(st9001.qty,0)* sd.iNatUnitPrice AS AmntKH,
        st300X.cWhCode AS cWhCodeBSC ,
        w.cWhName,
        st300X.cbatch AS cbatchBSC ,
        st300X.rdate AS rdateBSC ,
        ISNULL(st300X.qty,0) AS QtyBSC ,
        st9001.cWhCode AS cWhCodeKH ,
        st9001.cbatch AS cbatchKH ,
        st9001.rdate AS rdateKH ,
        ISNULL(st9001.qty,0) AS QtyKH ,
        ISNULL(invoice.qty,0) AS QtyYK ,`,
})
export class RptBysoKucun extends BaseEntity{
  @ViewColumn()
  cCusCode: string | null;
  @ViewColumn()
  cCusName: string | null;
  @ViewColumn()
  cCusAbbName: string;
  @ViewColumn()
  cPersonCode: string | null;
  @ViewColumn()
  cPersonName: string | null;
  @ViewColumn()
  cDepName: string | null;
  @ViewColumn()
  cDepCode: string | null;
  @ViewColumn()
  cSoCode: string | null;
  @ViewColumn()
  iRowNo: number | null;
  @ViewColumn()
  cInvCCode: string | null;
  @ViewColumn()
  cinvcname: string | null;
  @ViewColumn()
  cInvCode: string | null;
  @ViewColumn()
  cInvName: string | null;
  @ViewColumn()
  cInvStd: string | null;
  @ViewColumn()
  cInvAddCode: string | null;
  @ViewColumn()
  cs: string;
  @ViewColumn()
  grp: number;
  @ViewColumn()
  lo: string;
  @ViewColumn()
  iNatUnitPrice: number | null;
  @ViewColumn()
  iQuantity: number | null;
  @ViewColumn()
  cWhCodeDl: string;
  @ViewColumn()
  cbatchDl: string | null;
  @ViewColumn()
  rdateDl: Date | null;
  @ViewColumn()
  qtyDl: number;
  @ViewColumn()
  amntDl: number | null;
  @ViewColumn()
  amntBsc: number | null;
  @ViewColumn()
  amntKh: number | null;
  @ViewColumn()
  cWhCodeBsc: string | null;
  @ViewColumn()
  cWhName: string | null;
  @ViewColumn()
  cbatchBsc: string | null;
  @ViewColumn()
  rdateBsc: Date | null;
  @ViewColumn()
  qtyBsc: number;
  @ViewColumn()
  cWhCodeKh: string | null;
  @ViewColumn()
  cbatchKh: string | null;
  @ViewColumn()
  rdateKh: Date | null;
  @ViewColumn()
  qtyKh: number;
  @ViewColumn()
  qtyYk: number;
  @ViewColumn()
  kdate: Date | null;
  @ViewColumn()
  cAddress: string | null;
  @ViewColumn()
  iOriCost: number | null;
  @ViewColumn()
  cd24: string | null;
  @ViewColumn()
  cDefine34: number | null;
  @ViewColumn()
  cDefine31: string | null;
  @ViewColumn()
  hlistno: string | null;
  @ViewColumn()
  dDate: Date;
  @ViewColumn()
  dPreDate: Date | null;
  @ViewColumn()
  y: number | null;
  @ViewColumn()
  mon: number | null;
  @ViewColumn()
  cSCloser: string | null;
  @ViewColumn()
  memo: string | null;
  @ViewColumn()
  cStName: string | null;
  @ViewColumn()
  cStCode: string | null;
  @ViewColumn()
  cd25: string | null;
}
