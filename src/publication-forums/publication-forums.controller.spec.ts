import { Test, TestingModule } from '@nestjs/testing';
import { PublicationForumsController } from './publication-forums.controller';
import { PublicationForumsService } from './publication-forums.service';

describe('PublicationForumsController', () => {
  let controller: PublicationForumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicationForumsController],
      providers: [PublicationForumsService],
    }).compile();

    controller = module.get<PublicationForumsController>(PublicationForumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
