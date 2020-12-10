import { Test, TestingModule } from '@nestjs/testing';
import { PoOpenFjsumController } from './PoOpenFjjsum.controller';

describe('DfgReportPoOpenFjsumController', () => {
  let controller: PoOpenFjsumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoOpenFjsumController],
    }).compile();

    controller = module.get<PoOpenFjsumController>(PoOpenFjsumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
