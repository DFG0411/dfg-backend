import { Test, TestingModule } from '@nestjs/testing';
import { PoWorkloadService } from './PoWorkload.service';

describe('PoWorkloadService', () => {
  let service: PoWorkloadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoWorkloadService],
    }).compile();

    service = module.get<PoWorkloadService>(PoWorkloadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
