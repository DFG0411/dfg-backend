import { Test, TestingModule } from '@nestjs/testing';
import { SalesZmService } from './SalesZm.service';

describe('SaleszmService', () => {
  let service: SalesZmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesZmService],
    }).compile();

    service = module.get<SalesZmService>(SalesZmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
