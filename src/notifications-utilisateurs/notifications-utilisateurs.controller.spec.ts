import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsUtilisateursController } from './notifications-utilisateurs.controller';
import { NotificationsUtilisateursService } from './notifications-utilisateurs.service';

describe('NotificationsUtilisateursController', () => {
  let controller: NotificationsUtilisateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsUtilisateursController],
      providers: [NotificationsUtilisateursService],
    }).compile();

    controller = module.get<NotificationsUtilisateursController>(NotificationsUtilisateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
