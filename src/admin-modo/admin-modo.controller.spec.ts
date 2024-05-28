import { Test, TestingModule } from '@nestjs/testing';
import { AdminModoController } from './admin-modo.controller';
import { AdminModoService } from './admin-modo.service';

describe('AdminModoController', () => {
  let controller: AdminModoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminModoController],
      providers: [AdminModoService],
    }).compile();

    controller = module.get<AdminModoController>(AdminModoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
