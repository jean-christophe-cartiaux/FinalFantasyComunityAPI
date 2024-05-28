import { Test, TestingModule } from '@nestjs/testing';
import { CategorieFfController } from './categorie-ff.controller';
import { CategorieFfService } from './categorie-ff.service';

describe('CategorieFfController', () => {
  let controller: CategorieFfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorieFfController],
      providers: [CategorieFfService],
    }).compile();

    controller = module.get<CategorieFfController>(CategorieFfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
