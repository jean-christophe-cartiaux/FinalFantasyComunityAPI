import { Test, TestingModule } from '@nestjs/testing';
import { LikesActualitesController } from './likes-actualites.controller';
import { LikesActualitesService } from './likes-actualites.service';

describe('LikesActualitesController', () => {
  let controller: LikesActualitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikesActualitesController],
      providers: [LikesActualitesService],
    }).compile();

    controller = module.get<LikesActualitesController>(LikesActualitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
