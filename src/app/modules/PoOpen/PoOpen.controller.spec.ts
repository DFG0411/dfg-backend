import { Test, TestingModule } from '@nestjs/testing';
import { PoOpenController } from './PoOpen.controller';

describe('DfgReportPoOpenController', () => {
  let controller: PoOpenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoOpenController],
    }).compile();

    controller = module.get<PoOpenController>(PoOpenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
