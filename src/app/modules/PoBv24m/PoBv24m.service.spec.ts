import { Test, TestingModule } from '@nestjs/testing';
import { PoBv24mService } from './PoBv24m.service';

describe('DfgReportPoBv24mService', () => {
  let service: PoBv24mService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoBv24mService],
    }).compile();

    service = module.get<PoBv24mService>(PoBv24mService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
