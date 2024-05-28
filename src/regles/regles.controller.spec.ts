import { Test, TestingModule } from '@nestjs/testing';
import { ReglesController } from './regles.controller';
import { ReglesService } from './regles.service';

describe('ReglesController', () => {
  let controller: ReglesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReglesController],
      providers: [ReglesService],
    }).compile();

    controller = module.get<ReglesController>(ReglesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
