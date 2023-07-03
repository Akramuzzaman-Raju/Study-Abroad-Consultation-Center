import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ConsultantDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  country: string;
}
