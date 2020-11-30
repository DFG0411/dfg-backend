import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportChukuwkController } from './dfg-report-chukuwk.controller';

describe('DfgReportChukuwkController', () => {
  let controller: DfgReportChukuwkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportChukuwkController],
    }).compile();

    controller = module.get<DfgReportChukuwkController>(DfgReportChukuwkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
