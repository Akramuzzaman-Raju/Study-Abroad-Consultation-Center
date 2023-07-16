import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class ScheduleDto {
    @IsNotEmpty()
    meetingId: string;
    @IsNotEmpty()
    meetingDate: string;
    @IsNotEmpty()
    meetingTime: string;
    @IsNotEmpty()
    meetingAgenda: string;
  }