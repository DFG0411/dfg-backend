import { Test, TestingModule } from '@nestjs/testing';
import { ProductRcController } from './ProductRc.controller';

describe('ProductRcController', () => {
  let controller: ProductRcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRcController],
    }).compile();

    controller = module.get<ProductRcController>(ProductRcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
