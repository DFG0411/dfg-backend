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


  ],
  controllers: [AppController],
  providers: [ AppService],
  exports: [],
})
export class AppModule {}
