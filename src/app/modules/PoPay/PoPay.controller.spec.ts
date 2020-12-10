import { Test, TestingModule } from '@nestjs/testing';
import { PoPayController } from './PoPay.controller';

describe('PoPayController', () => {
  let controller: PoPayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoPayController],
    }).compile();

    controller = module.get<PoPayController>(PoPayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
