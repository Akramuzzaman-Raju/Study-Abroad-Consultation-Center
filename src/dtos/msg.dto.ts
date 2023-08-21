import { IsNotEmpty, IsOptional } from 'class-validator';

export class MsgDto {
  //@IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  cont: string;
  //
}
