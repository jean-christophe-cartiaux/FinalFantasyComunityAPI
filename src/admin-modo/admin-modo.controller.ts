import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { AdminModoService } from './admin-modo.service';
import { CreateAdminModoDto } from './dto/create-admin-modo.dto';
import { UpdateAdminModoDto } from './dto/update-admin-modo.dto';
import {AdminGuard} from "../utilisateurs/guards/admin.guard";
import {Roles} from "../utilisateurs/decorators/decorator";

@Controller('admin-modo')
@UseGuards(AdminGuard)
export class AdminModoController {
  constructor(private readonly adminModoService: AdminModoService) {}

  @Post()
  create(@Body() createAdminModoDto: CreateAdminModoDto) {
    return this.adminModoService.create(createAdminModoDto);
  }

  @Get()
  @Roles('Admin')
  find() {
    return this.adminModoService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminModoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminModoDto: UpdateAdminModoDto) {
    return this.adminModoService.update(+id, updateAdminModoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminModoService.remove(+id);
  }
}
