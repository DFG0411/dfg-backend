import { MenuModule } from './admin/modules/menu/menu.module';
// import { MenuService } from './admin/menu/menu.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './app/modules/inventory/inventory.module';
import { DatabaseModule } from './database/database.module';
import { HistoryModule } from './app/modules/history/history.module';
import { BomPlanModule } from './app/modules/bom/plan.module';
import { HourRateModule } from './app/modules/hourrate/hourrate.module';
import { StockTakingModule } from './app/modules/stocktaking/stocktaking.module';
import { MoModule } from './app/modules/mo/mo.module';
// import { GraphQLModule } from '@nestjs/graphql';

// import { SessionModule } from './admin/session/session.module';
import { AuthModule } from './admin/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProvinceModule } from './admin/modules/province/province.module';
import { CityModule } from './admin/modules/city/city.module';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './admin/auth/passport/jwt.strategy';
import { DatajsonModule } from './app/modules/datajson/datajson.module';

import { DfgReportZzzhModule } from './app/modules/dfg-report-zzzh/dfg-report-zzzh.module';
import { DfgReportZhModule } from './app/modules/dfg-report-zh/dfg-report-zh.module'
import { from } from 'rxjs';
import{DfgReportUninvoicedModule}from './app/modules/dfg-report-uninvoiced/dfg-report-uninvoiced.module'
// import { DatajsonService } from './app/datajson/datajson.service';
import{DfgReportTyuzanModule}from './app/modules/dfg-report-tyuzan/dfg-report-tyuzan.module'
import{DfgReportSoReceiveModule}from './app/modules/dfg-report-so-receive/dfg-report-so-receive.module'
import{DfgReportSaleszmModule}from './app/modules/dfg-report-saleszm/dfg-report-saleszm.module'
import{DfgReportSalesModule}from './app/modules/dfg-report-sales/dfg-report-sales.module'
import{DfgReportProductRchincdallModule}from './app/modules/dfg-report-product-rchincdall/dfg-report-product-rchincdall.module'
import{DfgReportProductRchincdModule}from './app/modules/dfg-report-product-rchincd/dfg-report-product-rchincd.module'

import { DfgReportOrdersModule } from './app/modules/dfg-report-orders/dfg-report-orders.module';
import { DfgReportChukuwkModule } from './app/modules/dfg-report-chukuwk/dfg-report-chukuwk.module';
import { DfgReportBysokucunModule } from './app/modules/dfg-report-bysokucun/dfg-report-bysokucun.module';
import { DfgReportPo24mModule } from './app/modules/dfg-report-po-24m/dfg-report-po-24m.module';
import { DfgReportPoModule } from './app/modules/dfg-report-po/dfg-report-po.module';
import { DfgReportPoBvModule } from './app/modules/dfg-report-po-bv/dfg-report-po-bv.module';
import { DfgReportPoBv24mModule } from './app/modules/dfg-report-po-bv-24m/dfg-report-po-bv-24m.module';
import { DfgReportPoOpenModule } from './app/modules/dfg-report-po-open/dfg-report-po-open.module';
import { DfgReportPoOpenFjsumModule } from './app/modules/dfg-report-po-open-fjsum/dfg-report-po-open-fjsum.module';
import { DfgReportPoOpenNoupModule } from './app/modules/dfg-report-po-open-noup/dfg-report-po-open-noup.module';
import { DfgReportPoPayModule } from './app/modules/dfg-report-po-pay/dfg-report-po-pay.module';
import { DfgReportPoPay24mModule } from './app/modules/dfg-report-po-pay-24m/dfg-report-po-pay-24m.module';
import { DfgReportPoPricecompareModule } from './app/modules/dfg-report-po-pricecompare/dfg-report-po-pricecompare.module';
import { DfgReportPoTqlvModule } from './app/modules/dfg-report-po-tqlv/dfg-report-po-tqlv.module';
import { DfgReportPoTqlvzModule } from './app/modules/dfg-report-po-tqlvz/dfg-report-po-tqlvz.module';
import { DfgReportPoWorkloadModule } from './app/modules/dfg-report-po-workload/dfg-report-po-workload.module';
import { DfgReportPoWorkloadHModule } from './app/modules/dfg-report-po-workload-h/dfg-report-po-workload-h.module';
import { DfgReportPoWorkloadVModule } from './app/modules/dfg-report-po-workload-v/dfg-report-po-workload-v.module';
import { DfgReportProductRcModule } from './app/modules/dfg-report-product-rc/dfg-report-product-rc.module';

// import { DatajsonService } from './app/datajson/datajson.service';

@Module({
  imports: [

    DatabaseModule,
    InventoryModule,
    BomPlanModule,
    HourRateModule,
    HistoryModule,
    StockTakingModule,
    MoModule,
    // UserModule,
    // UserRoleModule,
    CityModule,
    ProvinceModule,
    // SessionModule,
    AuthModule,
    ProvinceModule,
    CityModule,
    MenuModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    //   context: ({ req }) => ({ req }),
    //   debug: false,
    //   playground: process.env.GRAPHQL_PLAYGROUND == 'true',
    //   // formatError: graphqlError,
    //   installSubscriptionHandlers: true,
    // }),
    DatajsonModule,

    DfgReportZzzhModule,
    DfgReportZhModule,
    DfgReportUninvoicedModule,
    DfgReportTyuzanModule,
    DfgReportSoReceiveModule,
    DfgReportSaleszmModule,
    DfgReportSalesModule,
    DfgReportProductRchincdallModule,
    DfgReportProductRchincdModule,



    DfgReportOrdersModule,
    DfgReportChukuwkModule,
    DfgReportBysokucunModule,
    DfgReportPo24mModule,
    DfgReportPoModule,
    DfgReportPoBvModule,
    DfgReportPoBv24mModule,
    DfgReportPoOpenModule,
    DfgReportPoOpenFjsumModule,
    DfgReportPoOpenNoupModule,
    DfgReportPoPayModule,
    DfgReportPoPay24mModule,
    DfgReportPoPricecompareModule,
    DfgReportPoTqlvModule,
    DfgReportPoTqlvzModule,
    DfgReportPoWorkloadModule,
    DfgReportPoWorkloadHModule,
    DfgReportPoWorkloadVModule,
    DfgReportProductRcModule

  ],
  controllers: [AppController],
  providers: [ AppService],
  exports: [],
})
export class AppModule {}
