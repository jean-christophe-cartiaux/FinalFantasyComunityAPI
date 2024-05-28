import { Test, TestingModule } from '@nestjs/testing';
import { MessagePrivesController } from './message-prives.controller';
import { MessagePrivesService } from './message-prives.service';

describe('MessagePrivesController', () => {
  let controller: MessagePrivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagePrivesController],
      providers: [MessagePrivesService],
    }).compile();

    controller = module.get<MessagePrivesController>(MessagePrivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
