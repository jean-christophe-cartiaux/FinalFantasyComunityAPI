import { Test, TestingModule } from '@nestjs/testing';
import { CommentaireActualitesController } from './commentaire-actualites.controller';
import { CommentaireActualitesService } from './commentaire-actualites.service';

describe('CommentaireActualitesController', () => {
  let controller: CommentaireActualitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentaireActualitesController],
      providers: [CommentaireActualitesService],
    }).compile();

    controller = module.get<CommentaireActualitesController>(CommentaireActualitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
