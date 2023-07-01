import {
  IsEmail,
  IsNotEmpty,
  //IsNumber,
  IsString,
  //Length,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  //@IsNumber()
  //@Length(10)
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
