import { Test, TestingModule } from '@nestjs/testing';
import { FolowsUtilisateursController } from './folows-utilisateurs.controller';
import { FolowsUtilisateursService } from './folows-utilisateurs.service';

describe('FolowsUtilisateursController', () => {
  let controller: FolowsUtilisateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolowsUtilisateursController],
      providers: [FolowsUtilisateursService],
    }).compile();

    controller = module.get<FolowsUtilisateursController>(FolowsUtilisateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
