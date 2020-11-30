import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../database/database.module';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { FileResolver } from './file.resolvers';
import { fileProviders } from './file.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [...fileProviders, FileService, FileResolver],
  exports: [FileService],
})
export class FileModule {
}
