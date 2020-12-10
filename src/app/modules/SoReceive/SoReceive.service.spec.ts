import { Test, TestingModule } from '@nestjs/testing';
import { SoReceiveService } from './SoReceive.service';

describe('SoReceiveService', () => {
  let service: SoReceiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoReceiveService],
    }).compile();

    service = module.get<SoReceiveService>(SoReceiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
