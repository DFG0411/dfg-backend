import { Test, TestingModule } from '@nestjs/testing';
import { PoTqlvService } from './PoTqlv.service';

describe('DfgReportPoTqlvService', () => {
  let service: PoTqlvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoTqlvService],
    }).compile();

    service = module.get<PoTqlvService>(PoTqlvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
