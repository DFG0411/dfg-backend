import { Test, TestingModule } from '@nestjs/testing';
import { UninvoicedService } from './Uninvoiced.service';

describe('UninvoicedService', () => {
  let service: UninvoicedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UninvoicedService],
    }).compile();

    service = module.get<UninvoicedService>(UninvoicedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
