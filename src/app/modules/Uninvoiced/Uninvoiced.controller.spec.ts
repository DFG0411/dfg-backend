import { Test, TestingModule } from '@nestjs/testing';
import { UninvoicedController } from './Uninvoiced.controller';

describe('UninvoicedController', () => {
  let controller: UninvoicedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UninvoicedController],
    }).compile();

    controller = module.get<UninvoicedController>(UninvoicedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
