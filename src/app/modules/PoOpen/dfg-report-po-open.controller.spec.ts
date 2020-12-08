import { Test, TestingModule } from '@nestjs/testing';
import { DfgReportPoOpenController } from './dfg-report-po-open.controller';

describe('DfgReportPoOpenController', () => {
  let controller: DfgReportPoOpenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DfgReportPoOpenController],
    }).compile();

    controller = module.get<DfgReportPoOpenController>(DfgReportPoOpenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
