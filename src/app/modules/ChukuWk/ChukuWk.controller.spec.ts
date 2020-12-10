import { Test, TestingModule } from '@nestjs/testing';
import { ChukuWkController } from './ChukuWk.controller';

describe('DfgReportChukuwkController', () => {
  let controller: ChukuWkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChukuWkController],
    }).compile();

    controller = module.get<ChukuWkController>(ChukuWkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
