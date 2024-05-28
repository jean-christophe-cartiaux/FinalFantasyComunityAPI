import { Test, TestingModule } from '@nestjs/testing';
import { AmisController } from './amis.controller';
import { AmisService } from './amis.service';

describe('AmisController', () => {
  let controller: AmisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmisController],
      providers: [AmisService],
    }).compile();

    controller = module.get<AmisController>(AmisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
