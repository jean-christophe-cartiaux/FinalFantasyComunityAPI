import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminModoDto } from './create-admin-modo.dto';

export class UpdateAdminModoDto extends PartialType(CreateAdminModoDto) {}
