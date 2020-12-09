import { Test, TestingModule } from '@nestjs/testing';
import { PoOpenFjsumService } from './PoOpenFjsum.service';

describe('DfgReportPoOpenFjsumService', () => {
  let service: PoOpenFjsumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoOpenFjsumService],
    }).compile();

    service = module.get<PoOpenFjsumService>(PoOpenFjsumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
