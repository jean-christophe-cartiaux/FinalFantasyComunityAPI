import { Test, TestingModule } from '@nestjs/testing';
import { ParametreUtilisateursController } from './parametre-utilisateurs.controller';
import { ParametreUtilisateursService } from './parametre-utilisateurs.service';

describe('ParametreUtilisateursController', () => {
  let controller: ParametreUtilisateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametreUtilisateursController],
      providers: [ParametreUtilisateursService],
    }).compile();

    controller = module.get<ParametreUtilisateursController>(ParametreUtilisateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
