import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoTqlvzController } from './dfg-report-po-tqlvz.controller';

describe('DfgReportPoTqlvzController', () => {
  let controller: DfgReportPoTqlvzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoTqlvzController],
    }).compile();

    controller = module.get<DfgReportPoTqlvzController>(DfgReportPoTqlvzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
