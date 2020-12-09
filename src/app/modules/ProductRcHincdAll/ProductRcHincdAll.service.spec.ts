import { Test, TestingModule } from '@nestjs/testing';
import { ProductRcHincdAllService } from './ProductRcHincdAll.service';

describe('ProductRcHincdAllService', () => {
  let service: ProductRcHincdAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRcHincdAllService],
    }).compile();

    service = module.get<ProductRcHincdAllService>(ProductRcHincdAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
