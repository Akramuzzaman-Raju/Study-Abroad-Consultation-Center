import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class EmailDto {
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
