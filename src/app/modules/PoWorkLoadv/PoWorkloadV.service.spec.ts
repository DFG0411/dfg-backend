import { Test, TestingModule } from '@nestjs/testing';
import { PoWorkloadVService } from './PoWorkloadV.service';

describe('PoWorkloadVService', () => {
  let service: PoWorkloadVService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoWorkloadVService],
    }).compile();

    service = module.get<PoWorkloadVService>(PoWorkloadVService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
