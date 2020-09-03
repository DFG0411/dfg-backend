import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// import { JWTMiddleware } from './admin/auth/middlewares/jwt.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'assets'),{prefix:'/assets/'});
  // app.use(JWTMiddleware);
  const options = new DocumentBuilder()
    .setTitle('DFGBackend Api')
    .setDescription('API tester')
    .setVersion('0.1')
    .addTag('DFGBackend')
    // .addBearerAuth('authorization', 'header')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen('4000','localhost');
}
bootstrap();
