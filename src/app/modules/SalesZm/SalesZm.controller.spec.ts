import { Test, TestingModule } from '@nestjs/testing';
import { SalesZmController } from './SalesZm.controller';

describe('SalesZmController', () => {
  let controller: SalesZmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesZmController],
    }).compile();

    controller = module.get<SalesZmController>(SalesZmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
