import { Test, TestingModule } from '@nestjs/testing';
import { SoReceiveController } from './SoReceive.controller';

describe('SoReceiveController', () => {
  let controller: SoReceiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoReceiveController],
    }).compile();

    controller = module.get<SoReceiveController>(SoReceiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
