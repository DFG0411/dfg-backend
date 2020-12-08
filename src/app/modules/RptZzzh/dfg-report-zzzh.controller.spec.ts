import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportZzzhController } from './dfg-report-zzzh.controller';

describe('DfgReportZzzhController', () => {
  let controller: DfgReportZzzhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportZzzhController],
    }).compile();

    controller = module.get<DfgReportZzzhController>(DfgReportZzzhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
