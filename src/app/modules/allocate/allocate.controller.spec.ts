import { Test, TestingModule } from '@nestjs/testing';
import { AllocateController } from './allocate.controller';

describe('AllocateController', () => {
  let controller: AllocateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllocateController],
    }).compile();

    controller = module.get<AllocateController>(AllocateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
