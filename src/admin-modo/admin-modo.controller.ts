import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminModoService } from './admin-modo.service';
import { CreateAdminModoDto } from './dto/create-admin-modo.dto';
import { UpdateAdminModoDto } from './dto/update-admin-modo.dto';

@Controller('admin-modo')
export class AdminModoController {
  constructor(private readonly adminModoService: AdminModoService) {}

  @Post()
  create(@Body() createAdminModoDto: CreateAdminModoDto) {
    return this.adminModoService.create(createAdminModoDto);
  }

  @Get()
  findAll() {
    return this.adminModoService.findAll();
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
