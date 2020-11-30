import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoTqlvController } from './dfg-report-po-tqlv.controller';

describe('DfgReportPoTqlvController', () => {
  let controller: DfgReportPoTqlvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoTqlvController],
    }).compile();

    controller = module.get<DfgReportPoTqlvController>(DfgReportPoTqlvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
