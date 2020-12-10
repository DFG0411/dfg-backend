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

import { RptZzzhModule } from './app/modules/RptZzzh/RptZzzh.module';
import { RptZhModule } from './app/modules/RptZh/RptZh.module'
import { from } from 'rxjs';
import{UninvoicedModule}from './app/modules/Uninvoiced/Uninvoiced.module'
// import { DatajsonService } from './app/datajson/datajson.service';
import{TyuzanModule}from './app/modules/Tyuzan/Tyuzan.module'
import{SoReceiveModule}from './app/modules/SoReceive/SoReceive.module'
import{SalesZmModule}from './app/modules/SalesZm/SalesZm.module'
import{SalesModule}from './app/modules/Sales/Sales.module'
import{DfgReportProductRchincdallModule}from './app/modules/ProductRcHincdAll/dfg-report-product-rchincdall.module'
import{DfgReportProductRchincdModule}from './app/modules/ProductRcHincd/dfg-report-product-rchincd.module'

import { DfgReportOrdersModule } from './app/modules/Orders/dfg-report-orders.module';
import { DfgReportChukuwkModule } from './app/modules/ChukuWk/dfg-report-chukuwk.module';
import { DfgReportBysokucunModule } from './app/modules/RptBysoKucun/dfg-report-bysokucun.module';
import { DfgReportPo24mModule } from './app/modules/Po24m/dfg-report-po-24m.module';
import { RptPoModule } from './app/modules/RptPo/RptPo.module';
import { DfgReportPoBvModule } from './app/modules/Pobv/dfg-report-po-bv.module';
import { DfgReportPoBv24mModule } from './app/modules/PoBv24m/dfg-report-po-bv-24m.module';
import { DfgReportPoOpenModule } from './app/modules/PoOpen/dfg-report-po-open.module';
import { DfgReportPoOpenFjsumModule } from './app/modules/PoOpenFjsum/dfg-report-po-open-fjsum.module';
import { DfgReportPoOpenNoupModule } from './app/modules/PoOpenNoup/dfg-report-po-open-noup.module';
import { DfgReportPoPayModule } from './app/modules/PoPay/dfg-report-po-pay.module';
import { DfgReportPoPay24mModule } from './app/modules/PoPay24m/dfg-report-po-pay-24m.module';
import { DfgReportPoPricecompareModule } from './app/modules/PoPriceCompare/dfg-report-po-pricecompare.module';
import { DfgReportPoTqlvModule } from './app/modules/PoTqlv/dfg-report-po-tqlv.module';
import { DfgReportPoTqlvzModule } from './app/modules/PoTqlvz/dfg-report-po-tqlvz.module';
import { DfgReportPoWorkloadModule } from './app/modules/PoWorkLoad/dfg-report-po-workload.module';
import { DfgReportPoWorkloadHModule } from './app/modules/PoWorkLoadh/dfg-report-po-workload-h.module';
import { DfgReportPoWorkloadVModule } from './app/modules/PoWorkLoadv/dfg-report-po-workload-v.module';
import { DfgReportProductRcModule } from './app/modules/ProductRc/dfg-report-product-rc.module';

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

    RptZzzhModule,
    RptZhModule,
    UninvoicedModule,
    TyuzanModule,
    SoReceiveModule,
    SalesZmModule,
    SalesModule,
    DfgReportProductRchincdallModule,
    DfgReportProductRchincdModule,



    DfgReportOrdersModule,
    DfgReportChukuwkModule,
    DfgReportBysokucunModule,
    DfgReportPo24mModule,
    RptPoModule,
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
