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
import{UninvoicedModule}from './app/modules/Uninvoiced/Uninvoiced.module'
// import { DatajsonService } from './app/datajson/datajson.service';

import{ProductRcHincdAllModule}from './app/modules/ProductRcHincdAll/ProductRcHincdAll.module'
import{ProductRcHincdModule}from './app/modules/ProductRcHincd/ProductRcHincd.module'

import { OrdersModule } from './app/modules/Orders/Orders.module';
import { ChukuwkModule } from './app/modules/ChukuWk/ChukuWk.module';
import { RptBysoKucunModule } from './app/modules/RptBysoKucun/RptBysoKucun.module';
import { Po24mModule } from './app/modules/Po24m/Po24m.module';
import { PoBvModule } from './app/modules/Pobv/PoBv.module';
import { PoBv24mModule } from './app/modules/PoBv24m/PoBv24m.module';
import { PoOpenModule } from './app/modules/PoOpen/PoOpen.module';
import { PoOpenFjsumModule } from './app/modules/PoOpenFjsum/PoOpenFjsum.module';
import { PoOpenNoupModule } from './app/modules/PoOpenNoup/PoOpenNoup.module';
import { PoPayModule } from './app/modules/PoPay/PoPay.module';
import { PoPay24mModule } from './app/modules/PoPay24m/PoPay24m.module';
import { PoPriceCompareModule } from './app/modules/PoPriceCompare/PoPriceCompare.module';
import { PoTqlvModule } from './app/modules/PoTqlv/PoTqlv.module';
import { PoTqlvZModule } from './app/modules/PoTqlvz/PoTqlvZ.module';
import { PoWorkloadModule } from './app/modules/PoWorkLoad/PoWorkload.module';
import { PoWorkloadHModule } from './app/modules/PoWorkLoadh/PoWorkloadH.module';
import { PoWorkloadVModule } from './app/modules/PoWorkLoadv/PoWorkloadV.module';
import { ProductRcModule } from './app/modules/ProductRc/ProductRc.module';
import{TyuzanModule}from './app/modules/Tyuzan/Tyuzan.module'
import{SoReceiveModule}from './app/modules/SoReceive/SoReceive.module'
import{SalesZmModule}from './app/modules/SalesZm/SalesZm.module'
import{SalesModule}from './app/modules/Sales/Sales.module'

import { RptPoModule } from './app/modules/RptPo/RptPo.module';


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


    ProductRcHincdAllModule,
    ProductRcHincdModule,



    OrdersModule,
    ChukuwkModule,
    RptBysoKucunModule,
    Po24mModule,

    PoBvModule,
    PoBv24mModule,
    PoOpenModule,
    PoOpenFjsumModule,
    PoOpenNoupModule,
    PoPayModule,
    PoPay24mModule,
    PoPriceCompareModule,
    PoTqlvModule,
    PoTqlvZModule,
    PoWorkloadModule,
    PoWorkloadHModule,
    PoWorkloadVModule,
    ProductRcModule,
    RptZzzhModule,
    RptZhModule,
    UninvoicedModule,
    TyuzanModule,
    SoReceiveModule,
    SalesZmModule,
    SalesModule,





    RptPoModule,


  ],
  controllers: [AppController],
  providers: [ AppService],
  exports: [],
})
export class AppModule {}
