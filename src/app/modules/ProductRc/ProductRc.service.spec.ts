import { Test, TestingModule } from '@nestjs/testing';
import { ProductRcService } from './ProductRc.service';

describe('ProductRcService', () => {
  let service: ProductRcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRcService],
    }).compile();

    service = module.get<ProductRcService>(ProductRcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
