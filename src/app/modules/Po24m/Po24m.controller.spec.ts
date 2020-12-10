import { Test, TestingModule } from '@nestjs/testing';
import { Po24mController } from './Po24m.controller';

describe('Po24mController', () => {
  let controller: Po24mController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Po24mController],
    }).compile();

    controller = module.get<Po24mController>(Po24mController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
