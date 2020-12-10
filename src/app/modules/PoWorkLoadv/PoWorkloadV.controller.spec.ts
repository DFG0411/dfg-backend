import { Test, TestingModule } from '@nestjs/testing';
import { PoWorkloadVController } from './PoWorkloadV.controller';

describe('PoWorkloadVController', () => {
  let controller: PoWorkloadVController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoWorkloadVController],
    }).compile();

    controller = module.get<PoWorkloadVController>(PoWorkloadVController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
