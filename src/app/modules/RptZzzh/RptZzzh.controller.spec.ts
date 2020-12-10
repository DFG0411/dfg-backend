import { Test, TestingModule } from '@nestjs/testing';
import { RptZzzhController } from './RptZzzh.controller';

describe('RptZzzhController', () => {
  let controller: RptZzzhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RptZzzhController],
    }).compile();

    controller = module.get<RptZzzhController>(RptZzzhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
