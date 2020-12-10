import { Test, TestingModule } from '@nestjs/testing';
import { PoPay24mController } from './PoPay24m.controller';

describe('PoPay24mController', () => {
  let controller: PoPay24mController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoPay24mController],
    }).compile();

    controller = module.get<PoPay24mController>(PoPay24mController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
