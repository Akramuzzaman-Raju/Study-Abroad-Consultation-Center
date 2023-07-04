import { IsOptional } from 'class-validator';

export class UpdateDto {
  @IsOptional()
  name: string;
  @IsOptional()
  phone: string;
  @IsOptional()
  //@IsEmail()
  email: string;
  @IsOptional()
  //@IsString()
  password: string;
}
