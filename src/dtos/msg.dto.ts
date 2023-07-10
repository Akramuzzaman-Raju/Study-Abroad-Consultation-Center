import { IsNotEmpty } from 'class-validator';

export class MsgDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cont: string;
  //
}