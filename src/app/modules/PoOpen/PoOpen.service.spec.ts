import { Test, TestingModule } from '@nestjs/testing';
import { PoOpenService } from './PoOpen.service';

describe('DfgReportPoOpenService', () => {
  let service: PoOpenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoOpenService],
    }).compile();

    service = module.get<PoOpenService>(PoOpenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
