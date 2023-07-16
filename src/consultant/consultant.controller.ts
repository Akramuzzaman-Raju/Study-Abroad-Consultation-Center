import {
    Body,
    Controller,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import { ConsultantService } from 'src/consultant/consultant.service';
  import { ConsultantDto } from 'src/dtos/consultant.dto';
@Controller('consultants')
export class ConsultantController {
  constructor(private consultantService: ConsultantService) {}

  @Post('/consultant')
  createConsultant(@Body() body: ConsultantDto) {
    this.consultantService.create(
      body.name,
      body.phone,
      body.email,
      body.country,
    );
  }

  @Get('/find/:country')
  findConsultant(@Param('country') country: string) {
    return this.consultantService.find(country);
  }
}