import { Module } from '@nestjs/common';
import { DfgReportChukuwkController } from './dfg-report-chukuwk.controller';

@Module({
  controllers: [DfgReportChukuwkController]
})
export class DfgReportChukuwkModule {}
