import { IsOptional } from 'class-validator';

export class UpdatescheduleDto {
  @IsOptional()
  meetingId: string;
  @IsOptional()
  meetingDate: string;
  @IsOptional()
  meetingTime: string;
  @IsOptional()
  meetingAgenda: string;
}