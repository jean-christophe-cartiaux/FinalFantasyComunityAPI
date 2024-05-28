import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationsUtilisateursService } from './notifications-utilisateurs.service';
import { CreateNotificationsUtilisateurDto } from './dto/create-notifications-utilisateur.dto';
import { UpdateNotificationsUtilisateurDto } from './dto/update-notifications-utilisateur.dto';

@Controller('notifications-utilisateurs')
export class NotificationsUtilisateursController {
  constructor(private readonly notificationsUtilisateursService: NotificationsUtilisateursService) {}

  @Post()
  create(@Body() createNotificationsUtilisateurDto: CreateNotificationsUtilisateurDto) {
    return this.notificationsUtilisateursService.create(createNotificationsUtilisateurDto);
  }

  @Get()
  findAll() {
    return this.notificationsUtilisateursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsUtilisateursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationsUtilisateurDto: UpdateNotificationsUtilisateurDto) {
    return this.notificationsUtilisateursService.update(+id, updateNotificationsUtilisateurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsUtilisateursService.remove(+id);
  }
}
