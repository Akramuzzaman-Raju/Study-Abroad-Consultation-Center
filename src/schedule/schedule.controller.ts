import {
    Body,
    Controller,
    Delete,
    Param,
    Post,
    Put,
    Patch,
  } from '@nestjs/common';
  
  import { ScheduleService } from 'src/schedule/shedule.service';
  import { ScheduleDto } from 'src/dtos/schedeule.dto';
import { UpdatescheduleDto } from 'src/dtos/Updateschedule.dto';
  @Controller('schedules')
  export class ScheduleController {
    constructor(
      private scheduleService: ScheduleService,
    ) {}
    @Post('/meeting')
    createMeeting(@Body() body: ScheduleDto) {
      this.scheduleService.create(
        body.meetingId,
        body. meetingDate,
        body.meetingTime,
        body.meetingAgenda,
      );
      return "new meeting created successfully"
    }
  @Post('/:id')
  findMeeting(@Param('id') id: string) {
    return this.scheduleService.findOne(parseInt(id));
  }
  @Delete('/:id')
  removeMeeting(@Param('id') id: string) {
    return this.scheduleService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateMeeting(@Param('id') id: string, @Body() body: UpdatescheduleDto) {
    return this.scheduleService.update(parseInt(id), body);
  } 
}
  