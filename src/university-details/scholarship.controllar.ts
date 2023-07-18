import {
    Body,
    Controller,
    Delete,
    Param,
    Post,
    Put,
    Patch,
  } from '@nestjs/common';
import { ScholarshipDto } from 'src/dtos/scholarship.dto';
import { ScholarshipService } from './scholarship.service';
  @Controller('scholarships')
  export class ScholarshipController {
    constructor(
      private scholarshipService: ScholarshipService,
    ) {}
    @Post('/scholarship')
    createMeeting(@Body() body: ScholarshipDto) {
      this.scholarshipService.create(
        body.scholarshipId,
        body.universityName,
        body.eligibleCourse,
        body.possibleScholarship,
      );
      return "created successfully"
    }
  @Post('/:id')
  findScholarship(@Param('id') id: string) {
    return this.scholarshipService.findOne(parseInt(id));
  }
  @Delete('/:id')
  removeScholarship(@Param('id') id: string) {
    return this.scholarshipService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateScholarship(@Param('id') id: string, @Body() body: ScholarshipDto) {
    return this.scholarshipService.update(parseInt(id), body);
  } 
}
  