import { Test, TestingModule } from '@nestjs/testing';
import { PoBv24mController } from './PoBv24m.controller';

describe('DfgReportPoBv24mController', () => {
  let controller: PoBv24mController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoBv24mController],
    }).compile();

    controller = module.get<PoBv24mController>(PoBv24mController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
