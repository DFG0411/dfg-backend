import { Test, TestingModule } from '@nestjs/testing';
import { PoWorkloadHService } from './PoWorkloadH.service';

describe('PoWorkloadHService', () => {
  let service: PoWorkloadHService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoWorkloadHService],
    }).compile();

    service = module.get<PoWorkloadHService>(PoWorkloadHService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
